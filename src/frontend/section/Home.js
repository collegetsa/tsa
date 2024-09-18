"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../redux/AppSlice";
import Course from "./Course";
import Table from "./Table";
import Footer from "./Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home({ CollegeLists }) {
  const router = useRouter();
  const disPatch = useDispatch();
  const [search, setSearch] = useState("");

  const filterdSearchList = CollegeLists?.filter((item) => {
    return (
      item?.collegeData?.collegeName
        ?.toLowerCase()
        .includes(search?.toLowerCase()) ||
      item?.collegeData?.content
        ?.toLowerCase()
        .includes(search?.toLowerCase()) ||
      item?.collegeData?.location
        ?.toLowerCase()
        .includes(search?.toLowerCase()) ||
      item?.collegeData?.collegeType
        ?.toLowerCase()
        .includes(search?.toLowerCase())
    );
  });

  return (
    <React.Fragment>
      <div className="home-bg">
        <main className="container-txt">
          <section className="animation">
            <div>
              <div>Admission Open in {new Date().getFullYear()}</div>
            </div>
            <div>
              <div>Best Colleges & Courses</div>
            </div>
            <div>
              <div>Start Your Best Career</div>
            </div>
            <div>
              <div>Best Exams in {new Date().getFullYear()}</div>
            </div>
          </section>
        </main>
        <div className="input-search-select">
          <input
            className="input input-search"
            type="search"
            placeholder="Search your course, college and exams"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="select-search">
            {filterdSearchList?.map((item, index) => (
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="pl-10 pr-10 pt-10 pb-10"
                key={index}
                onClick={(e) => {
                  setSearch(item?.collegeData?.collegeName);
                  router.push(`/college/${item?.pageUrl}`);
                }}>
                <span>
                  <Image
                    src={item?.collegeData?.logo}
                    width={20}
                    height={20}
                    alt={item?.collegeData?.collegeName}
                    unoptimized
                  />
                </span>
                <span className="ml-10">{item?.collegeData?.collegeName}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20">
          <button
            className="btn home-btn"
            onClick={() => {
              disPatch(
                setForm({
                  isForm: true,
                  title: `Free Counsling ${new Date().getFullYear()}`,
                  type: "counsling",
                  logo: "/images/logo.png",
                })
              );
            }}>
            Free Counsling
          </button>
          <button
            className="btn home-btn ml-20"
            onClick={() => {
              disPatch(
                setForm({
                  isForm: true,
                  title: `Admission Form ${new Date().getFullYear()}`,
                  type: "admission",
                  logo: "/images/logo.png",
                })
              );
            }}>
            Application {new Date().getFullYear()}
          </button>
        </div>
      </div>
      <Course />
      <div className="text-image-group">
        <div>
          <h2>
            Why it is important to choose the Right College for your
            professional carrier?
          </h2>
          <p>
            Choosing a quality college is one of the significant decisions that
            every student will make in life. It's true where we attend our
            college will have a lasting impact on our professional and personal
            lifestyles. On that note, most students should go to good colleges;
            instead of choosing random ones for their further education. A good
            and reputable college will offer impressive employment opportunities
            that matches your skills and expertise. Moreover, the combination of
            student's skills and the college's best opportunity will become a
            successful career for the student.
          </p>
        </div>
        <Image src="/images/step-by-step.png" width={200} height={200} alt="" />
      </div>
      <Table />
    </React.Fragment>
  );
}