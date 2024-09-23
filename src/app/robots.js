export const dynamic = "force-dynamic";

export default async function robots() {
  dynamic;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/free-counselling-list",
        "/admin/admission-list",
        "/admin/college/create",
        "/admin/college/edit/id",
      ],
    },
    sitemap: `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`,
  };
}