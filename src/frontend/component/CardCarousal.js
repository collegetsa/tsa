import React from "react";
import Carousel from "better-react-carousel";
import Image from "next/image";
import { currentDate } from "../utility";
import Link from "next/link";

const MyDot = ({ isActive }) => (
  <span
    style={{
      display: "inline-block",
      height: isActive ? "10px" : "7px",
      width: isActive ? "10px" : "7px",
      background: "#1890ff",
      marginTop: "25px",
      background: "#04aa6d",
    }}></span>
);

export const CardCarousal = ({ updates }) => {
  return (
    <Carousel
      dot={MyDot}
      cols={3}
      rows={1}
      gap={10}
      autoPlay={3000}
      showDots={true}
      loop
      responsiveLayout={[
        {
          breakpoint: 1200,
          cols: 3,
          rows: 1,
          gap: 10,
          loop: true,
          autoplay: 3000,
        },
        {
          breakpoint: 768,
          cols: 1,
          rows: 1,
          gap: 10,
          loop: true,
          autoplay: 3000,
        },
      ]}>
      {updates?.map((item, index) => (
        <Carousel.Item key={index}>
          <Link href={`/update/${item?.pageUrl}`}>
            <div className="carousel-card">
              <h4 className="mt-10 mb-10">{item?.title}</h4>
              <small>{item?.updateDate}</small>
              <p className="update-description-limit">{item?.description}</p>
              <p className="mt-0">View More...</p>
            </div>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
