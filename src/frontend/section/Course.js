"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Course({ courseCount }) {
  const getCount = (filed) => {
    const data = courseCount?.filter((item) => item?._id === filed);
    return data[0]?.count;
  };

  const courseType = [
    {
      img: "/images/engineering.png",
      text: "Engineering",
      pageUrl: "engineering",
      count: getCount("engineering"),
    },
    {
      img: "/images/arts-science.png",
      text: "Arts & Science",
      pageUrl: "arts-science",
      count: getCount("arts-science"),
    },
    {
      img: "/images/medical.png",
      text: "Medical",
      pageUrl: "medical",
      count: getCount("medical"),
    },
    {
      img: "/images/agriculture.png",
      text: "Agriculture",
      pageUrl: "agriculture",
      count: getCount("agriculture"),
    },

    {
      img: "/images/law.png",
      text: "Law",
      pageUrl: "law",
      count: getCount("law"),
    },
    {
      img: "/images/hotel-management.png",
      text: "Hotel Management",
      pageUrl: "hotel-management",
      count: getCount("hotel-management"),
    },
    {
      img: "/images/animation.png",
      text: "Animation",
      pageUrl: "animation",
      count: getCount("animation"),
    },
    {
      img: "/images/marine.png",
      text: "Marine",
      pageUrl: "marine",
      count: getCount("marine"),
    },
    {
      img: "/images/education.png",
      text: "Education",
      pageUrl: "education",
      count: getCount("education"),
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
            <small style={{ color: "#727272" }}>{field?.count} Courses</small>
          </div>
        </Link>
      ))}
    </div>
  );
}
