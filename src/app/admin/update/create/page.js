"use client";
import dynamic from "next/dynamic";
const CreateUpdate = dynamic(() => import("@/frontend/admin/CreateUpdate"), {
  ssr: false,
});

export default function page() {
  return (
    <CreateUpdate type="create"/>
  )
}
