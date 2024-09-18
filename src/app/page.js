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

export default async function page() {
  const CollegeLists = await getCollegeList();
  return <Home CollegeLists={CollegeLists} />;
}