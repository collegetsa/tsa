"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setAuth, setCourseField, setIsPreview } from "../redux/AppSlice";
import toast, { Toaster } from "react-hot-toast";
import { useCookies } from "next-client-cookies";

function Header() {
  const cookies = useCookies();
  const disPatch = useDispatch();
  const auth = useSelector((state) => state.app.auth);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const jwtToken = cookies.get("jwtToken");
    if (jwtToken) {
      const decoded = jwtDecode(jwtToken);
      disPatch(setAuth(decoded));
    }
  }, []);

  const CourseList = [
    { courseField: "Enginnering", url: "engineering" },
    { courseField: "Arts & Science", url: "arts-science" },
    { courseField: "Medical", url: "medical" },
    { courseField: "Agriculture", url: "agriculture" },
    { courseField: "Law", url: "law" },
    { courseField: "Hotel Management", url: "hotel-management" },
    { courseField: "Animation", url: "animation" },
    { courseField: "Marine", url: "marine" },
    { courseField: "Education", url: "education" },
  ];

  return (
    <React.Fragment>
      <Toaster />
      <nav className="navbar">
        <div className="container">
          <Link href="/">
            <div className="logo-group">
              <Image
                src="/images/logo.png"
                width={40}
                height={40}
                alt="CollegeTSA"
              />
              <h3 className="font-20">College TSA</h3>
            </div>
          </Link>
          {!showNavbar ? (
            <Image
              src="/images/menu.png"
              width={30}
              height={30}
              alt=""
              className="menu-icon"
              onClick={() => setShowNavbar(!showNavbar)}
            />
          ) : (
            <Image
              src="/images/close.png"
              width={30}
              height={30}
              alt=""
              className="menu-icon"
              onClick={() => setShowNavbar(!showNavbar)}
            />
          )}
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li onClick={() => setShowNavbar(false)}>
                <Link href="/">Home</Link>
              </li>
              <li className="dropdown">
                <div className="dropdown-arrow">
                  <span>Colleges</span>
                  <Image
                    src="/images/down-arrow.png"
                    width={20}
                    height={20}
                    alt=""
                    className="cursor-pointer dropbtn ml-5"
                  />
                </div>
                <div className="dropdown-content">
                  <div onClick={() => setShowNavbar(false)}>
                    <Link href="/college">Top Colleges in 2024</Link>
                  </div>
                  {CourseList?.map((item, index) => (
                    <div
                      className="mt-20"
                      key={index}
                      onClick={() => setShowNavbar(false)}>
                      <Link href={`/college?collegetype=${item?.url}`}>
                        {item?.courseField} Colleges in 2024
                      </Link>
                    </div>
                  ))}
                </div>
              </li>
              <li className="dropdown">
                <div className="dropdown-arrow">
                  <span>Course</span>
                  <Image
                    src="/images/down-arrow.png"
                    width={20}
                    height={20}
                    alt=""
                    className="cursor-pointer dropbtn ml-5"
                  />
                </div>
                <div className="dropdown-content">
                  {CourseList?.map((item, index) => (
                    <div
                      className={index !== 0 && "mt-20"}
                      key={index}
                      onClick={() => setShowNavbar(false)}>
                      <Link href={`/course/${item?.url}`}>
                        {item?.courseField} Courses in 2024
                      </Link>
                    </div>
                  ))}
                </div>
              </li>
              <li className="dropdown">
                <div className="dropdown-arrow">
                  <span>Updates</span>
                  <Image
                    src="/images/down-arrow.png"
                    width={20}
                    height={20}
                    alt=""
                    className="cursor-pointer dropbtn ml-5"
                  />
                </div>
                <div className="dropdown-content">
                  <div onClick={() => setShowNavbar(false)}>
                    <Link href="/university">Top Universities in 2024</Link>
                  </div>
                  <div className="mt-20" onClick={() => setShowNavbar(false)}>
                    <Link href="/exams">Top Exams</Link>
                  </div>
                  <div className="mt-20" onClick={() => setShowNavbar(false)}>
                    <Link href="/latest-news">Latest News</Link>
                  </div>
                </div>
              </li>
              <li onClick={() => setShowNavbar(false)}>
                <Link href="/abroad">Abroad</Link>
              </li>
              <li onClick={() => setShowNavbar(false)}>
                <Link href="/contact">Contact Us</Link>
              </li>
              {auth?.email ? (
                <React.Fragment>
                  <li className="dropdown">
                    <div className="dropdown-arrow">
                      <span>
                        <Image
                          src="/images/profile.png"
                          width={30}
                          height={30}
                          alt=""
                          className="cursor-pointer dropbtn"
                        />
                      </span>
                      <span>
                        <Image
                          src="/images/down-arrow.png"
                          width={20}
                          height={20}
                          alt=""
                          className="cursor-pointer dropbtn arrow"
                        />
                      </span>
                    </div>
                    <div className="dropdown-content" style={{ right: "0" }}>
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className="cursor-pointer mb-20"
                        onClick={() => setShowNavbar(false)}>
                        <span>
                          <Image
                            src="/images/user.png"
                            width={20}
                            height={20}
                            alt=""
                            className="mr-10"
                          />
                        </span>
                        <span>Hi, {auth?.userName}</span>
                      </div>
                      {auth?.email === "collegetsainfo@gmail.com" && (
                        <React.Fragment>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className="cursor-pointer mb-20"
                            onClick={() => setShowNavbar(false)}>
                            <Link href="/admin/free-counseling-list">
                              <span>
                                <Image
                                  src="/images/freecounseling.png"
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="mr-10"
                                />
                              </span>
                              <span>FreeCounseling</span>
                            </Link>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className="cursor-pointer mb-20"
                            onClick={() => setShowNavbar(false)}>
                            <Link href="/admin/admission-list">
                              <span>
                                <Image
                                  src="/images/admission.png"
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="mr-10"
                                />
                              </span>
                              <span>Admission</span>
                            </Link>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className="cursor-pointer mb-20"
                            onClick={() => {
                              setShowNavbar(false);
                              disPatch(setIsPreview(false));
                            }}>
                            <Link href="/admin/college/create">
                              <span>
                                <Image
                                  src="/images/college.png"
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="mr-10"
                                />
                              </span>
                              <span>Create College</span>
                            </Link>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className="cursor-pointer mb-20"
                            onClick={() => setShowNavbar(false)}>
                            <Link href="/admin/course/create">
                              <span>
                                <Image
                                  src="/images/course.png"
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="mr-10"
                                />
                              </span>
                              <span>Create Course</span>
                            </Link>
                          </div>
                        </React.Fragment>
                      )}
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className="cursor-pointer"
                        onClick={() => {
                          cookies.remove("jwtToken");
                          window.location.reload();
                          setShowNavbar(false);
                        }}>
                        <span>
                          <Image
                            src="/images/signOut.png"
                            width={25}
                            height={25}
                            alt=""
                            className="mr-5"
                          />
                        </span>
                        <span>SignOut</span>
                      </div>
                    </div>
                  </li>
                </React.Fragment>
              ) : (
                <li onClick={() => setShowNavbar(false)}>
                  <Link href="/login">
                    <Image
                      src="/images/signIn.png"
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Form />
    </React.Fragment>
  );
}

export default Header;
