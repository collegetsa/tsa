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

const getUpdates = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/update?type="home-page`,
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
  const updates = await getUpdates();
  return <Home courseCount={courseCount} updates={updates} />;
}
