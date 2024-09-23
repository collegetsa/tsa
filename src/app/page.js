import Home from "@/frontend/section/Home";

const getCollegeList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/college`,
    {
      cache: "no-store",
    }
  );
  if (response.ok) {
    return response.json();
  }
};

const getCourseList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/course`,
    {
      cache: "no-store",
    }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page() {
  const CollegeLists = await getCollegeList();
  const CourseLists = await getCourseList();
  return <Home CollegeLists={CollegeLists} CourseLists={CourseLists} />;
}