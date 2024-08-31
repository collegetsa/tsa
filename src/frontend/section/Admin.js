"use client";
import React, { useState } from "react";
import AdmissionList from "@/frontend/admin/AdmissionList";
import FreeCounslingList from "@/frontend/admin/FreeCounslingList";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";

export default function Admin({ FreeCounslingLists, AdmissionLists }) {
  const [page, setPage] = useState("counsling");
  const auth = useSelector((state) => state.app.auth);
  if (auth?.email !== "collegetsainfo@gmail.com") {
    redirect("/");
  }
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <select
          onChange={(e) => setPage(e.target.value)}
          className="did-floating-select mt-20"
          style={{ width: "200px" }}>
          <option value="counsling">FreeCounslingList</option>
          <option value="admission">AdmissionList</option>
          {/* <option value="college">Create College</option> */}
        </select>
      </div>
      {page === "counsling" && (
        <FreeCounslingList FreeCounslingLists={FreeCounslingLists} />
      )}
      {page === "admission" && (
        <AdmissionList AdmissionLists={AdmissionLists} />
      )}
    </React.Fragment>
  );
}
