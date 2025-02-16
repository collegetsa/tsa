"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setIsPreview } from "../redux/AppSlice";
import Course from "./Course";
import Table from "./Table";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import CounterComponent from "../component/CounterComponent";
import { CardCarousal } from "../component/CardCarousal";
import { trackGAEvent } from "../google-analytics";

export default function Home({ courseCount, updates }) {
  const router = useRouter();
  const disPatch = useDispatch();
  const auth = useSelector((state) => state.app.auth);

  const [search, setSearch] = useState("");
  const [_search] = useDebounce(search, 500);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  useEffect(() => {
    if (_search.length > 0) {
      const fetchedCourse = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/course?type=search&search=${_search}`
        );
        if (response.ok) {
          const data = await response.json();
          setData(data);
        }
      };
      const fetchedCollege = async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/college?type=search&search=${_search}`
        );
        if (response.ok) {
          const data = await response.json();
          setData2(data);
        }
      };
      fetchedCourse();
      fetchedCollege();
    }
  }, [_search]);

  return (
    <React.Fragment>
      <div className="home-bg">
        <div className="home-bg-group">
          <main className="container-txt">
            <section className="animation">
              <div>
                <div>Dream College & Course with CollegeTSA!</div>
              </div>
              <div>
                <div>Make Best Decisions with CollegeTSA!</div>
              </div>
              <div>
                <div>Ease Selection and More Opportunities!</div>
              </div>
            </section>
          </main>
          <p>
            Select your dream college and course with ease! Our expert guidance
            and the best discussion help students find the best educational
            paths to achieve their career goals.
          </p>
          <div>
            <input
              style={{ borderColor: "#ececec" }}
              className="input input-search"
              type="search"
              placeholder="Search Your Course, College and Exams"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="select-search">
              {data2?.map((item, index) => (
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
                      src="/images/college.png"
                      width={20}
                      height={20}
                      alt=""
                      unoptimized
                    />
                  </span>
                  <span className="ml-10">{item?._id?.collegeName}</span>
                </div>
              ))}
              {data?.map((item, index) => (
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
              {/* {data?.length === 0 && data2?.length === 0 && (
              <div
                style={{ display: "flex", alignItems: "center" }}
                className="pl-10 pr-10 pt-10 pb-10">
                <span>No results found!</span>
              </div>
            )} */}
            </div>
          </div>
          <div className="mt-20">
            <button
              className="btn home-btn"
              onClick={() => {
                disPatch(
                  setForm({
                    isForm: true,
                    title: `Free Counseling for Students`,
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
      </div>
      <Course courseCount={courseCount} />
      <div className="text-image-group">
        <div className="text-image-group-content">
          <div>
            <h2 className="font-head">
              Why it is important to choose the Right Course and College?
            </h2>
            <p>
              Choosing a quality college is one of the significant decisions
              that every student will make in life. It's true where we attend
              our college will have a lasting impact on our professional and
              personal lifestyles. On that note, most students should go to good
              colleges; instead of choosing random ones for their further
              education. A good and reputable college will offer impressive
              employment opportunities that matches your skills and expertise.
              Moreover, the combination of student's skills and the college's
              best opportunity will become a successful career for the student.
            </p>
          </div>
          <Image
            src="/images/why-important.svg"
            width={500}
            height={250}
            alt=""
          />
        </div>
      </div>
      <h2 className="text-center mt-50">Latest Updates & News</h2>
      <CardCarousal updates={updates} />
      <div className="counter-animation mb-50 mt-50">
        <div>
          <Image
            src="/images/students.png"
            width={50}
            height={50}
            alt=""
            className="mb-7"
          />
          <CounterComponent start={1800} end={2000} time={1500} />
          <p className="m-auto">Students Applied</p>
        </div>
        <div>
          <Image
            src="/images/experience-years.png"
            width={50}
            height={50}
            alt=""
            className="mb-7"
          />
          <CounterComponent start={0} end={10} time={1500} />
          <p className="m-auto">Years Experience</p>
        </div>
        <div>
          <Image
            src="/images/countries.png"
            width={50}
            height={50}
            alt=""
            className="mb-7"
          />
          <CounterComponent start={0} end={8} time={1500} />
          <p className="m-auto">Countries</p>
        </div>
      </div>
      <Table />
    </React.Fragment>
  );
}