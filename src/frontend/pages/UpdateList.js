"use client";
import Link from 'next/link';
import React from 'react'

export default function UpdateList({ updates }) {
    return (
      <React.Fragment>
        <h1 className="text-center font-25 mt-30">Latest News & Updates</h1>
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="mt-15 mb-30">
          <div className="updates-list">
            {updates &&
              updates?.map((item, index) => (
                <Link href={`/update/${item?.pageUrl}`} key={index}>
                  <div className="carousel-card">
                    <h4 className="mt-10 mb-10">{item?.title}</h4>
                    <small>{item?.updateDate}</small>
                    <p className="update-description-limit">
                      {item?.description}
                    </p>
                    <p className="mt-0">View More...</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </React.Fragment>
    );
}
