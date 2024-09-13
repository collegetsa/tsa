import dynamic from "next/dynamic";
const CreateCollege = dynamic(() => import("@/frontend/admin/CreateCollege"), {
  ssr: false,
});

const getCollege = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/college/${id}`,
    { cache: "no-store" }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page({ params }) {
  const College = await getCollege(params.id);
  return <CreateCollege type="edit" editData={College} />;
}