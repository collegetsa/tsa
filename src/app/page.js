import Home from "@/frontend/section/Home";

const getCourseCount = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/course?type=course-count`,
    {
      cache: "no-store",
    }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page() {
  const courseCount = await getCourseCount();
  return <Home courseCount={courseCount} />;
}
