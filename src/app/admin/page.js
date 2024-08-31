import React from "react";
import Admin from "@/frontend/section/Admin";

const getFreeCounslingList = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/free-counsling`, {
    cache: "no-store",
  });
  if (response.ok) {
     return response.json();
   }
};

const getAdmissionList = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admission`, {
    cache: "no-store",
  });
  if (response.ok) {
    return response.json();
  }
};

export default async function page() {
  const FreeCounslingLists = await getFreeCounslingList();
  const AdmissionLists = await getAdmissionList();
  console.log("FreeCounslingLists", FreeCounslingLists);
  return (
    <Admin
      FreeCounslingLists={FreeCounslingLists}
      AdmissionLists={AdmissionLists}
    />
  );
}
