"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setIsPreview, setForm, setCourseField } from "../redux/AppSlice";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const CourseList = ({ data, fieldText }) => {
  const cookies = useCookies();
  const router = useRouter();
  const disPatch = useDispatch();
  const auth = useSelector((state) => state.app.auth);

  const deletedCourse = () => toast.success("Course Deleted");
  const [text, setText] = useState(0);

  const [select, setSelect] = useState({
    duration: "",
    level: "",
    elgibility: "",
    mode: "",
  });

  const filtered =
    data &&
    data?.filter((item) => {
      let selectFilter =
        item?.courseData?.duration
          ?.toLowerCase()
          ?.includes(select?.duration?.toLowerCase()) &&
        item?.courseData?.level
          ?.toLowerCase()
          ?.includes(select?.level?.toLowerCase()) &&
        item?.courseData?.elgibility
          ?.toLowerCase()
          ?.includes(select?.elgibility?.toLowerCase()) &&
        item?.courseData?.mode
          ?.toLowerCase()
          ?.includes(select?.mode?.toLowerCase());
      return selectFilter;
    });

  const handleChange = (e) => {
    setSelect((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const deleteCourse = async (item) => {
    const jwtToken = cookies.get("jwtToken");
    const response = await fetch(`/api/course/${item?._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    if (response.ok) {
      deletedCourse();
      router.refresh();
    }
  };

  let textShow;
  if (fieldText?.includes("engineering")) {
    textShow = "Engineering";
  } else if (fieldText?.includes("arts")) {
    textShow = "Arts & Science";
  } else if (fieldText?.includes("medical")) {
    textShow = "Medical";
  } else if (fieldText?.includes("agri")) {
    textShow = "Agriculture";
  } else if (fieldText?.includes("law")) {
    textShow = "Law";
  } else if (fieldText?.includes("design")) {
    textShow = "Design";
  } else if (fieldText?.includes("hotel")) {
    textShow = "Hotel Management";
  } else if (fieldText?.includes("animation")) {
    textShow = "Animation";
  } else if (fieldText?.includes("marine")) {
    textShow = "Marine";
  } else if (fieldText?.includes("dental")) {
    textShow = "Dental";
  } else if (fieldText?.includes("education")) {
    textShow = "Education";
  } else if (fieldText?.includes("management")) {
    textShow = "Management";
  } else if (fieldText?.includes("commerce")) {
    textShow = "Commerce";
  } else if (fieldText?.includes("pharmacy")) {
    textShow = "Pharmacy";
  }
  return (
    <React.Fragment>
      <div className="template">
        <h2 className="text-center mt-0">Best {textShow} Courses in 2024</h2>
        <button
          className="btn"
          onClick={() => {
            router?.push("/college");
            disPatch(setCourseField(fieldText));
          }}>
          Get Top {textShow} Colleges
        </button>
      </div>
      <div
        style={{ backgroundColor: "aliceblue", fontSize: "12px" }}
        className="sticky-header mb-30">
        <div className="table pb-10 pt-10">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/left.png"
              width={25}
              height={25}
              alt=""
              onClick={() => {
                if (text > 0) {
                  setText(text - 1);
                }
              }}
              className={`${text === 0 ? "disabled" : "cursor-pointer"}`}
            />
            <div
              style={{
                overflowX: "auto",
                scrollbarWidth: "none",
                width: "-webkit-fill-available",
                display: "flex",
                columnGap: "30px",
              }}
              className="mr-20 ml-20">
              {text < 1 && (
                <span>
                  <Link href="/course/engineering">Engineering</Link>
                </span>
              )}
              {text < 2 && (
                <span>
                  <Link href="/course/arts-science">Arts & Science</Link>
                </span>
              )}
              {text < 3 && (
                <span>
                  <Link href="/course/medical">Medical</Link>
                </span>
              )}
              {text < 4 && (
                <span>
                  <Link href="/course/agriculture">Agriculture</Link>
                </span>
              )}
              {text < 5 && (
                <span>
                  <Link href="/course/law">Law</Link>
                </span>
              )}
              {text < 6 && (
                <span>
                  <Link href="/course/design">Design</Link>
                </span>
              )}
              {text < 7 && (
                <span>
                  <Link href="/course/hotel-management">Hotel Management</Link>
                </span>
              )}
              {text < 8 && (
                <span>
                  <Link href="/course/animation">Animation</Link>
                </span>
              )}
              {text < 9 && (
                <span>
                  <Link href="/course/marine">Marine</Link>
                </span>
              )}
              {text < 10 && (
                <span>
                  <Link href="/course/dental">Dental</Link>
                </span>
              )}
              {text < 11 && (
                <span>
                  <Link href="/course/education">Education</Link>
                </span>
              )}
              {text < 12 && (
                <span>
                  <Link href="/course/management">Management</Link>
                </span>
              )}
              {text < 13 && (
                <span>
                  <Link href="/course/commerce">Commerce</Link>
                </span>
              )}
              {text < 14 && (
                <span>
                  <Link href="/course/pharmacy">Pharmacy</Link>
                </span>
              )}
            </div>
            <Image
              src="/images/right.png"
              width={25}
              height={25}
              alt=""
              onClick={() => {
                if (text < 11) {
                  setText(text + 1);
                }
              }}
              className={`${text === 11 ? "disabled" : "cursor-pointer"}`}
            />
          </div>
        </div>
      </div>
      <div className="table mb-30">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/images/filter.png"
            width={20}
            height={20}
            alt=""
            className="cursor-pointer"
          />
          <div
            style={{
              overflowX: "auto",
              scrollbarWidth: "thin",
              width: "-webkit-fill-available",
            }}>
            <div className="college-filter-group-select mt-10">
              <div className="did-floating-label-content ml-20 mb-0">
                <select
                  className="did-floating-select"
                  name="duration"
                  value={select.duration}
                  onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5">5 Years</option>
                  <option value="6">6 Years</option>
                  <option value="7">7 Years</option>
                  <option value="8">8 Years</option>
                </select>
                <label className="did-floating-label input-course">
                  Course Duration*
                </label>
              </div>
              <div className="did-floating-label-content ml-10 mb-0">
                <select
                  className="did-floating-select"
                  name="level"
                  value={select.level}
                  onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="ug">Under Graduate [UG]</option>
                  <option value="pg">Post Graduate [PG]</option>
                  <option value="phd">PhD</option>
                  <option value="diploma">Diploma</option>
                  <option value="post-diploma">Post Diploma</option>
                  <option value="certificate">Certificate Course</option>
                </select>
                <label className="did-floating-label input-address">
                  Course Level*
                </label>
              </div>
              <div className="did-floating-label-content ml-10 mb-0">
                <select
                  className="did-floating-select"
                  name="elgibility"
                  value={select.elgibility}
                  onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="10">10th Pass</option>
                  <option value="12">12th Pass</option>
                  <option value="graduate">Graduate</option>
                  <option value="post-graduate">Post Graduate</option>
                </select>
                <label className="did-floating-label input-ownership">
                  Eligibility*
                </label>
              </div>
              <div className="did-floating-label-content ml-10 mb-0">
                <select
                  className="did-floating-select"
                  name="mode"
                  value={select.mode}
                  onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="distance">Distance</option>
                  <option value="on-campus">On Campus</option>
                  <option value="off-campus">Off Campus</option>
                </select>
                <label className="did-floating-label input-ownership">
                  Mode
                </label>
              </div>
            </div>
          </div>
          <Image
            src="/images/reset.png"
            width={20}
            height={20}
            alt=""
            className="ml-20 cursor-pointer"
            onClick={() => {
              setSelect({
                duration: "",
                level: "",
                elgibility: "",
                mode: "",
              });
            }}
          />
        </div>
        <table id="customers" className="mt-20">
          <tbody>
            <tr>
              <th>#</th>
              <th>CourseName</th>
              <th>Duration</th>
              <th>Course Level</th>
              <th>Eligibility</th>
              <th>Mode</th>
            </tr>
            {filtered?.map((item, index) => (
              <tr
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  disPatch(
                    setForm({
                      isForm: true,
                      title: item?.courseData?.courseName,
                      type: "counselling",
                      logo: `/images/${item?.field}.png`,
                      interest: item?.field,
                    })
                  );
                }}>
                <td>{index + 1}</td>
                <td>
                  <div
                    className="hide-text pt-7 pb-7"
                    style={{ width: "500px" }}>
                    {item?.courseData?.courseName}
                  </div>
                  {auth && auth?.email === "collegetsainfo@gmail.com" && (
                    <React.Fragment>
                      <Image
                        src="/images/edit.png"
                        width={15}
                        height={15}
                        alt=""
                        className="cursor-pointer ml-20"
                        onClick={() => {
                          if (auth?.email === "collegetsainfo@gmail.com") {
                            disPatch(setIsPreview(true));
                            router.push(`/admin/course/edit/${item?._id}`);
                          }
                        }}
                      />
                      <Image
                        src="/images/delete.png"
                        width={15}
                        height={15}
                        alt=""
                        className="cursor-pointer ml-20"
                        onClick={() => {
                          if (auth?.email === "collegetsainfo@gmail.com") {
                            deleteCourse(item);
                          }
                        }}
                      />
                    </React.Fragment>
                  )}
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src="/images/duration.png"
                      width={15}
                      height={15}
                      alt=""
                    />
                    <span className="ml-7">{item?.courseData?.duration}</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src="/images/level.png"
                      width={15}
                      height={15}
                      alt=""
                    />
                    <span className="ml-7">{item?.courseData?.level}</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src="/images/elgibility.png"
                      width={15}
                      height={15}
                      alt=""
                    />
                    <span className="ml-7">{item?.courseData?.elgibility}</span>
                  </div>
                </td>
                <td>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Image
                      src="/images/mode.png"
                      width={15}
                      height={15}
                      alt=""
                    />
                    <span className="ml-7">{item?.courseData?.mode}</span>
                  </div>
                </td>
              </tr>
            ))}
            {filtered?.length === 0 && (
              <tr className="cursor-pointer">
                <td colSpan={6}>
                  <div className="text-center pt-10 pb-10">No data found!</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};
export default CourseList;
