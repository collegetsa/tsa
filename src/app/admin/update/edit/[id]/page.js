"use client";
import dynamic from "next/dynamic";

const CreateUpdate = dynamic(() => import("@/frontend/admin/CreateUpdate"), {
  ssr: false,
});

const getUpdate = async (id) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/update/${id}`,
    { cache: "no-store" }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page({params}) {
  const update = await getUpdate(params.id);
  return <CreateUpdate type="edit" editData={update} />;
}
