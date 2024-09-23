"use client";
import dynamic from "next/dynamic";

const CreateCourse = dynamic(() => import("@/frontend/admin/CreateCourse"), {
  ssr: false,
});

export default async function page() {
  return <CreateCourse type="create" />;
}
