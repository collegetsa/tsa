"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setIsPreview } from "../redux/AppSlice";
import Course from "./Course";
import Table from "./Table";
import Footer from "./Footer";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home({ CollegeLists, CourseLists }) {
  const router = useRouter();
  const disPatch = useDispatch();
  const auth = useSelector((state) => state.app.auth);
  const [search, setSearch] = useState("");

  const filterdSearchList =
    CollegeLists &&
    CollegeLists?.filter((item) => {
      return item?._id?.collegeName
        ?.toLowerCase()
        ?.includes(search?.toLowerCase());
    });

  const filterdSearchCourse =
    CourseLists &&
    CourseLists?.filter((item) => {
      return item?._id?.courseName
        ?.toLowerCase()
        ?.includes(search?.toLowerCase());
    });
  return (
    <React.Fragment>
      <div className="home-bg">
        <div
          className="social-group mb-15 mt-30"
          style={{ position: "absolute", right: "20px", top: "50px" }}>
          <a href="tel:9677869617">
            <span>
              <Image
                src="/images/phone.png"
                width={15}
                height={15}
                alt="collegetsa-call"
                className="template-icons"
              />
            </span>
            <span className="call-text color-white">+91 9677869617</span>
          </a>
          <a href="https://www.facebook.com/Tsaservices" target="_blank">
            <Image
              src="/images/facebook.svg"
              alt="telegram-collegetsa"
              title="telegram-collegetsa"
              width={20}
              height={20}
            />
          </a>
          <a href="https://t.me/tsaservices" target="_blank">
            <Image
              src="/images/telegram.svg"
              alt="telegram-collegetsa"
              title="telegram-collegetsa"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.youtube.com/@TSASERVICES/featured"
            target="_blank">
            <Image
              src="/images/youtube.svg"
              alt="youtube-collegetsa"
              title="youtube-collegetsa"
              width={20}
              height={20}
            />
          </a>
          <a
            href="https://www.instagram.com/tsa_services_education_gudie?igsh=MTluN25yN2E0MDlzZg=="
            target="_blank">
            <Image
              src="/images/instagram.svg"
              alt="instagram-collegetsa"
              title="instagram-collegetsa"
              width={20}
              height={20}
            />
          </a>
          <a href="https://wa.me/qr/XAKKC4YOZ5OBG1" target="_blank">
            <Image
              src="/images/whatsapp.svg"
              alt="whatsapp-collegetsa"
              title="whatsapp-collegetsa"
              width={20}
              height={20}
            />
          </a>
        </div>
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
                  setSearch(item?._id?.collegeName);
                  if (auth && auth?.email === "collegetsainfo@gmail.com") {
                    disPatch(setIsPreview(true));
                    router.push(`/admin/college/edit/${item?._id?.pageUrl}`);
                  } else {
                    router.push(`/college/${item?._id?.pageUrl}`);
                  }
                }}>
                <span>
                  <Image
                    src={item?._id?.logo}
                    width={20}
                    height={20}
                    alt=""
                    unoptimized
                  />
                </span>
                <span className="ml-10">{item?._id?.collegeName}</span>
              </div>
            ))}
            {filterdSearchCourse?.map((item, index) => (
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="pl-10 pr-10 pt-10 pb-10"
                key={index}
                onClick={(e) => {
                  setSearch(item?._id?.courseName);
                  router.push(`/course/${item?._id?.field}`);
                }}>
                <span>
                  <Image
                    src={`/images/${item?._id?.field}.png`}
                    width={20}
                    height={20}
                    alt=""
                    unoptimized
                  />
                </span>
                <span className="ml-10">{item?._id?.courseName}</span>
              </div>
            ))}
            {filterdSearchList?.length === 0 &&
              filterdSearchCourse?.length === 0 && (
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="pl-10 pr-10 pt-10 pb-10">
                  <span>No results found!</span>
                </div>
              )}
          </div>
        </div>
        <div className="mt-20">
          <button
            className="btn home-btn"
            onClick={() => {
              disPatch(
                setForm({
                  isForm: true,
                  title: `Get Free Counseling For Best College & Course`,
                  type: "counseling",
                  logo: "/images/freecounseling.png",
                })
              );
            }}>
            Free Counseling
          </button>
          <button
            className="btn home-btn ml-20"
            onClick={() => {
              disPatch(
                setForm({
                  isForm: true,
                  title: `Apply for Your Best College & Course`,
                  type: "admission",
                  logo: "/images/admission.png",
                })
              );
            }}>
            Application {new Date().getFullYear()}
          </button>
        </div>
      </div>
      <Course CourseLists={CourseLists} />
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
        <Image
          src="/images/step-by-step.webp"
          width={200}
          height={200}
          alt=""
        />
      </div>
      <Table />
    </React.Fragment>
  );
}
