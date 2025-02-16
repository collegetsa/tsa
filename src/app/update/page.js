import UpdateList from "@/frontend/pages/UpdateList";
import React from "react";

const getUpdates = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/update?type=all`,
    {
      cache: "no-store",
    }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page() {
  const updates = await getUpdates();
  return <UpdateList updates={updates} />;
}
