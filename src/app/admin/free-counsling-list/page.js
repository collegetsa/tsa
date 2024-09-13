import React from "react";
import FreeCounslingList from "@/frontend/admin/FreeCounslingList";

const getFreeCounslingList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/free-counsling`,
    {
      cache: "no-store",
    }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page() {
  const FreeCounslingLists = await getFreeCounslingList();
  return <FreeCounslingList data={FreeCounslingLists} />;
}