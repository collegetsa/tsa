import ViewUpdate from "@/frontend/pages/ViewUpdate";

const getUpdate = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/update/${id}`,
    { cache: "no-store" }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page({ params }) {
  const Update = await getUpdate(params.id);
  return <ViewUpdate Update={Update} />;
}
