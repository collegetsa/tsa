import CourseType from "@/frontend/CourseType";
import Home from "@/frontend/Home";
import HomeContent from "@/frontend/HomeContent";
import React from "react";

export default function page() {
  return (
    <React.Fragment>
      <Home />
      <CourseType />
      <HomeContent />
    </React.Fragment>
  );
}
