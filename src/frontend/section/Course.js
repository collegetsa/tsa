"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Course({ CourseLists }) {
  const courseCount = (filed) => {
    return CourseLists?.filter((item) => item?._id?.field === filed);
  };

  const courseType = [
    {
      img: "/images/engineering.png",
      text: "Engineering",
      pageUrl: "engineering",
      count: courseCount("engineering"),
    },
    {
      img: "/images/arts-science.png",
      text: "Arts & Science",
      pageUrl: "arts-science",
      count: courseCount("arts-science"),
    },
    {
      img: "/images/medical.png",
      text: "Medical",
      pageUrl: "medical",
      count: courseCount("medical"),
    },
    {
      img: "/images/agriculture.png",
      text: "Agriculture",
      pageUrl: "agriculture",
      count: courseCount("agriculture"),
    },

    {
      img: "/images/law.png",
      text: "Law",
      pageUrl: "law",
      count: courseCount("law"),
    },
    {
      img: "/images/design.png",
      text: "Design",
      pageUrl: "design",
      count: courseCount("design"),
    },
    {
      img: "/images/hotel-management.png",
      text: "Hotel Management",
      pageUrl: "hotel-management",
      count: courseCount("hotel-management"),
    },
    {
      img: "/images/animation.png",
      text: "Animation",
      pageUrl: "animation",
      count: courseCount("animation"),
    },
    {
      img: "/images/marine.png",
      text: "Marine",
      pageUrl: "marine",
      count: courseCount("marine"),
    },
    {
      img: "/images/dental.png",
      text: "Dental",
      pageUrl: "dental",
      count: courseCount("dental"),
    },
    {
      img: "/images/education.png",
      text: "Education",
      pageUrl: "education",
      count: courseCount("education"),
    },
    {
      img: "/images/management.png",
      text: "Management",
      pageUrl: "management",
      count: courseCount("management"),
    },
    {
      img: "/images/commerce.png",
      text: "Commerce",
      pageUrl: "commerce",
      count: courseCount("commerce"),
    },
    {
      img: "/images/pharmecy.png",
      text: "Pharmecy",
      pageUrl: "pharmecy",
      count: courseCount("pharmecy"),
    },
  ];

  return (
    <div className="course-field-group">
      {courseType.map((field, index) => (
        <Link key={index} href={`/course/${field?.pageUrl}`}>
          <div className="course-field">
            <Image
              src={field?.img}
              alt=""
              width={50}
              height={50}
              className="mb-15"
            />
            <p>{field?.text}</p>
            <small>{field?.count?.length} Courses</small>
          </div>
        </Link>
      ))}
    </div>
  );
}
