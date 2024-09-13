"use client";
import dynamic from "next/dynamic";

const CreateCollege = dynamic(() => import("@/frontend/admin/CreateCollege"), {
  ssr: false,
});

export default async function page() {
  return <CreateCollege type="create" />;
}