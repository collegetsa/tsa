import React from "react";
import AdmissionList from "@/frontend/admin/AdmissionList";

const getAdmissionList = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/admission`,
    {
      cache: "no-store",
    }
  );
  if (response.ok) {
    return response.json();
  }
};

export default async function page({ params }) {
  const AdmissionLists = await getAdmissionList();
  return <AdmissionList data={AdmissionLists} />;
}
