export const dynamic = "force-dynamic";

export default async function robots() {
  dynamic;
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/free-counseling-list",
        "/admin/admission-list",
        "/admin/college/create",
        "/admin/college/edit/:id",
        "/admin/course/create",
        "/admin/course/edit/:id",
      ],
    },
    sitemap: `${process.env.NEXT_PUBLIC_API_URL}/sitemap.xml`,
  };
}