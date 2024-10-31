import { unstable_noStore as noStore } from "next/cache";

export default async function sitemap() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/college?type=sitemap`,
    {
      cache: "no-store",
    }
  );
  noStore();
  const colleges = await response.json();

  const collegeUrls = colleges.map((item) => ({
    url: `${process.env.NEXT_PUBLIC_API_URL}/college/${item?._id?.pageUrl}`,
    lastModified: new Date(),
  }));

  const courses = [
    "engineering",
    "arts-science",
    "medical",
    "agriculture",
    "law",
    "hotel-management",
    "animation",
    "marine",
    "education",
  ];

  const courseUrls = courses.map((item) => ({
    url: `${process.env.NEXT_PUBLIC_API_URL}/course/${item}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/university`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/aboard`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/college`,
      lastModified: new Date(),
    },
    ...courseUrls,
    ...collegeUrls,
  ];
}