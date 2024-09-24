import React from "react";
import FreeCounselingList from "@/frontend/admin/FreeCounselingList";

const getFreeCounselingList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/free-counseling`,
    {
      cache: "no-store",
    }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page() {
  const FreeCounselingLists = await getFreeCounselingList();
  return <FreeCounselingList data={FreeCounselingLists} />;
}