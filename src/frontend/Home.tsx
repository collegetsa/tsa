"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { isForm } from "@/redux/FormSlice";

export default function Home() {
  const disPatch = useDispatch();
  return (
    <div className="home-bg d-flex flex-column justify-content-center align-items-center pb-100">
      <h1 className="text mb-20" data-text="College TSA">
        College TSA
      </h1>
      <p className="mb-25">Find your best Collge, Degree and Career!</p>
      <button className="button" onClick={() => disPatch(isForm(true))}>
        Apply Now
      </button>
    </div>
  );
}
