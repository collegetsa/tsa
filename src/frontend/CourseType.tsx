"use client";
import Image from "next/image";
import React from "react";

const fieldData = [
  { id: "1", img: "/image/engineering.png", text: "Engineering" },
  { id: "2", img: "/image/arts.png", text: "Arts" },
  { id: "3", img: "/image/medical.png", text: "Medical" },
  { id: "4", img: "/image/agriculture.png", text: "Agriculture" },
  { id: "5", img: "/image/commerce.png", text: "Commerce" },
  { id: "6", img: "/image/law.png", text: "Law" },
  { id: "7", img: "/image/hotel.png", text: "Hotel Management" },
  { id: "8", img: "/image/computer.png", text: "Computer" },
  { id: "9", img: "/image/design.png", text: "Design" },
  { id: "10", img: "/image/pharmecy.png", text: "Pharmecy" },
  { id: "11", img: "/image/management.png", text: "Management" },
  { id: "12", img: "/image/animation.png", text: "Animation" },
  { id: "13", img: "/image/archtecture.png", text: "Archtecture" },
  { id: "14", img: "/image/dental.png", text: "Dental" },
  { id: "15", img: "/image/education.png", text: "Education" },
  { id: "16", img: "/image/science.png", text: "Science" },
  { id: "17", img: "/image/paramedical.png", text: "Pharamedical" },
];

export default function CourseType() {
  return (
    <div className="course-field-group">
      {fieldData.map((field) => (
        <div className="course-field" id={field.id} key={field.id}>
          <Image
            src={field.img}
            alt={field.text}
            title={field.text}
            width={50}
            height={50}
            className="mb-15"
          />
          <p>{field.text}</p>
        </div>
      ))}
    </div>
  );
}
