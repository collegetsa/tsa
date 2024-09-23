import dynamic from "next/dynamic";
const CreateCourse = dynamic(() => import("@/frontend/admin/CreateCourse"), {
  ssr: false,
});

const getCourse = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/course/edit/${id}`,
    { cache: "no-store" }
  );
  if (response.ok) {
    return response.json();
  }
};
export default async function page({ params }) {
  const Course = await getCourse(params.id);
  return <CreateCourse type="edit" editData={Course} />;
}
