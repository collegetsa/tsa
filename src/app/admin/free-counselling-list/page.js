import React from "react";
import FreeCounsellingList from "@/frontend/admin/FreeCounsellingList";

const getFreeCounsellingList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/free-counselling`,
    {
      cache: "no-store",
    }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page() {
  const FreeCounsellingLists = await getFreeCounsellingList();
  return <FreeCounsellingList data={FreeCounsellingLists} />;
}