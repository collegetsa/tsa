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
      bgColor: "#eef9ff",
    },
    {
      img: "/images/arts-science.png",
      text: "Arts & Science",
      pageUrl: "arts-science",
      count: getCount("arts-science"),
      bgColor: "#F7B3201A",
    },
    {
      img: "/images/medical.png",
      text: "Medical",
      pageUrl: "medical",
      count: getCount("medical"),
      bgColor: "#F107501A",
    },
    {
      img: "/images/agriculture.png",
      text: "Agriculture",
      pageUrl: "agriculture",
      count: getCount("agriculture"),
      bgColor: "#25A55F1A",
    },

    {
      img: "/images/law.png",
      text: "Law",
      pageUrl: "law",
      count: getCount("law"),
      bgColor: "#B95FFD1A",
    },
    {
      img: "/images/marine.png",
      text: "Marine",
      pageUrl: "marine",
      count: getCount("marine"),
      bgColor: "#9ADE451A",
    },
    {
      img: "/images/animation.png",
      text: "Animation",
      pageUrl: "animation",
      count: getCount("animation"),
      bgColor: "#e4ffec",
    },

    {
      img: "/images/hotel-management.png",
      text: "Hotel Management",
      pageUrl: "hotel-management",
      count: getCount("hotel-management"),
      bgColor: "#fdd2d2",
    },
    {
      img: "/images/education.png",
      text: "Education",
      pageUrl: "education",
      count: getCount("education"),
      bgColor: "#e3e3e3",
    },
  ];

  return (
    <React.Fragment>
      {/* <h2 className="text-center font-head1">Top Education Fields</h2> */}
      <div className="course-field-group">
        {courseType.map((field, index) => (
          <Link key={index} href={`/course/${field?.pageUrl}`}>
            <div className="course-field">
              <div className="course-field-image">
                <Image
                  src={field?.img}
                  alt=""
                  width={50}
                  height={50}
                  className="mb-15"
                />
              </div>
              <div className="ml-25">
                <p className="mt-0 mb-12">{field?.text}</p>
                <p className="mb-0" style={{ color: "#727272" }}>
                  <small>{field?.count} Courses</small>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
}