import { unstable_noStore as noStore } from "next/cache";

export default async function sitemap() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/college`, {
    cache: "no-store",
  });
  noStore();
  const colleges = await response.json();

  const postEntries = colleges.map(({ pageUrl }) => ({
    url: `${process.env.NEXT_PUBLIC_API_URL}/college/${pageUrl}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_API_URL}`,
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
    ...postEntries,
  ];
}