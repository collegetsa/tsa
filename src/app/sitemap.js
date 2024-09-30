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

  const postEntries = colleges.map((item) => ({
    url: `${process.env.NEXT_PUBLIC_API_URL}/college/${item?._id?.pageUrl}`,
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
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/engineering`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/arts-science`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/medical`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/agriculture`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/law`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/design`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/hotel-management`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/animation`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/marine`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/dental`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/education`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/management`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/commerce`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/course/pharmacy`,
      lastModified: new Date(),
    },
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}/college`,
      lastModified: new Date(),
    },
    ...postEntries,
  ];
}