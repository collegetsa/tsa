import React from "react";
import Image from "next/image";

export default function Course() {
  const courseType = [
    { id: "1", img: "/images/engineering.png", text: "Engineering" },
    { id: "2", img: "/images/arts.png", text: "Arts & Science" },
    { id: "3", img: "/images/medical.png", text: "Medical" },
    { id: "4", img: "/images/agriculture.png", text: "Agriculture" },
    { id: "5", img: "/images/commerce.png", text: "Commerce" },
    { id: "6", img: "/images/law.png", text: "Law" },
    { id: "7", img: "/images/hotel.png", text: "Hotel Management" },
    { id: "8", img: "/images/computer.png", text: "Computer" },
    { id: "9", img: "/images/design.png", text: "Design" },
    { id: "10", img: "/images/pharmecy.png", text: "Pharmecy" },
    { id: "11", img: "/images/management.png", text: "Management" },
    { id: "12", img: "/images/animation.png", text: "Animation" },
    { id: "13", img: "/images/archtecture.png", text: "Archtecture" },
    { id: "14", img: "/images/dental.png", text: "Dental" },
    { id: "15", img: "/images/education.png", text: "Education" },
    { id: "16", img: "/images/paramedical.png", text: "Pharamedical" },
  ];
  return (
    <div className="course-field-group">
      {courseType.map((field) => (
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
