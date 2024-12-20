"use client";
import React, { useLayoutEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import {
  setIsPreview,
  setForm,
  setCourseField,
  setConfirmForm,
} from "../redux/AppSlice";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { customStyles } from "../utility";
import Modal from "react-modal";

const CourseList = ({ data, fieldText }) => {
  const cookies = useCookies();
  const router = useRouter();
  const disPatch = useDispatch();
  const auth = useSelector((state) => state.app.auth);
  const confirmForm = useSelector((state) => state.app.confirmForm);

  const deletedCourse = () => toast.success("Course Deleted");
  const [text, setText] = useState(0);

  const [select, setSelect] = useState({
    duration: "",
    level: "",
    elgibility: "",
    mode: "",
  });

  useLayoutEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);

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

  const deleteCourse = async (id) => {
    const jwtToken = cookies.get("jwtToken");
    const response = await fetch(`/api/course/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    if (response.ok) {
      disPatch(setConfirmForm({ isForm: false, deleteId: "" }));
      deletedCourse();
      router.refresh();
    }
  };

  function openForm(item) {
    if (!auth || auth?.email !== "collegetsainfo@gmail.com") {
      disPatch(
        setForm({
          isForm: true,
          title: item?.courseData?.courseName,
          type: "counseling",
          logo: `/images/${item?.field}.png`,
          interest: item?.field,
        })
      );
    }
  }

  function getColleges(data) {
    const array = data?.toLowerCase()?.split(" ");
    if (!array[0]?.includes(".")) {
      return array[0];
    } else {
      return array[1];
    }
  }

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
  }  else if (fieldText?.includes("hotel")) {
    textShow = "Hotel Management";
  } else if (fieldText?.includes("animation")) {
    textShow = "Animation";
  } else if (fieldText?.includes("marine")) {
    textShow = "Marine";
  } else if (fieldText?.includes("education")) {
    textShow = "Education";
  }
  return (
    <React.Fragment>
      <div className="template">
        <div style={{ display: "flex" }}>
          <div className="course-field-image mt-10">
            <Image
              src={`/images/${fieldText}.png`}
              width={50}
              height={50}
              alt={`Top ${textShow} Colleges`}
            />
          </div>
          <div className="ml-25">
            <h1 className="font-head">{textShow} Courses in 2024</h1>
            <div>
              <span>{data?.length} Courses</span>
              <span className="ml-20">Top {textShow} Exams</span>
            </div>
            <button
              className="btn mt-20"
              onClick={() => {
                router?.push(`/college?collegeType=${fieldText}`);
                disPatch(setCourseField(fieldText));
              }}>
              Top {textShow} Colleges
            </button>
          </div>
        </div>
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
                  <Link href="/course/hotel-management">Hotel Management</Link>
                </span>
              )}
              {text < 7 && (
                <span>
                  <Link href="/course/animation">Animation</Link>
                </span>
              )}
              {text < 8 && (
                <span>
                  <Link href="/course/marine">Marine</Link>
                </span>
              )}
              {text < 9 && (
                <span>
                  <Link href="/course/education">Education</Link>
                </span>
              )}
            </div>
            <Image
              src="/images/right.png"
              width={25}
              height={25}
              alt=""
              onClick={() => {
                if (text < 6) {
                  setText(text + 1);
                }
              }}
              className={`${text === 6 ? "disabled" : "cursor-pointer"}`}
            />
          </div>
        </div>
      </div>
      <div className="table">
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
                  <option value="2 Months">2 Months</option>
                  <option value="3 Months">3 Months</option>
                  <option value="6 Months">6 Months</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Years">2 Years</option>
                  <option value="3 Years">3 Years</option>
                  <option value="4 Years">4 Years</option>
                  <option value="5 Years">5 Years</option>
                  <option value="6 Years">6 Years</option>
                  <option value="7 Years">7 Years</option>
                  <option value="8 Years">8 Years</option>
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
                  <option value="ug">Under Graduate[UG]</option>
                  <option value="pg">Post Graduate[PG]</option>
                  <option value="phd">PhD</option>
                  <option value="diploma">Diploma</option>
                  <option value="post">Post Diploma</option>
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
                  <option value="post">Post Graduate</option>
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
                  <option value="full">Full Time</option>
                  <option value="part">Part Time</option>
                  <option value="distance">Distance</option>
                  <option value="on">On Campus</option>
                  <option value="off">Off Campus</option>
                </select>
                <label className="did-floating-label input-ownership">
                  Mode
                </label>
              </div>
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="ml-20 cursor-pointer"
            onClick={() => {
              setSelect({
                duration: "",
                level: "",
                elgibility: "",
                mode: "",
              });
            }}>
            <Image src="/images/reset.png" width={20} height={20} alt="" />
            <span className="ml-7">Clear All</span>
          </div>
        </div>
      </div>
      <div className="table mb-30">
        <table id="customers" className="mt-20">
          <tbody>
            <tr>
              <th>#</th>
              <th>CourseName</th>
              <th>Duration</th>
              <th>Course Level</th>
              <th>Eligibility</th>
              <th>Mode</th>
              <th>College</th>
            </tr>
            {filtered?.map((item, index) => (
              <tr
                key={index}
                className={`${
                  auth?.email !== "collegetsainfo@gmail.com"
                    ? "cursor-pointer"
                    : ""
                }`}>
                <td onClick={() => openForm(item)}>{index + 1}</td>
                <td onClick={() => openForm(item)}>
                  <div
                    className="hide-text pt-7 pb-7"
                    style={{ width: "450px" }}>
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
                            disPatch(
                              setConfirmForm({
                                isForm: true,
                                deleteId: item?._id,
                              })
                            );
                          }
                        }}
                      />
                    </React.Fragment>
                  )}
                </td>
                <td onClick={() => openForm(item)}>
                  {item?.courseData?.duration}
                </td>
                <td onClick={() => openForm(item)}>
                  {item?.courseData?.level}
                </td>
                <td onClick={() => openForm(item)}>
                  {item?.courseData?.elgibility}
                </td>
                <td onClick={() => openForm(item)}>{item?.courseData?.mode}</td>
                <td
                  onClick={() => {
                    router?.push(
                      `/college?search=${getColleges(
                        item?.courseData?.courseName
                      )}`
                    );
                  }}>
                  <u>Get</u>
                </td>
              </tr>
            ))}
            {filtered?.length === 0 && (
              <tr className="cursor-pointer">
                <td colSpan={7}>
                  <div className="text-center pt-10 pb-10">No data found!</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={confirmForm?.isForm}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}>
        <div className="confirm">
          <p className="mb-20">Are you confirm to delete?</p>
          <div>
            <button
              className="btn"
              onClick={() => deleteCourse(confirmForm?.deleteId)}>
              Delete
            </button>
            <button
              className="btn ml-20"
              onClick={() => {
                disPatch(setConfirmForm({ isForm: false, deleteId: "" }));
              }}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
    </React.Fragment>
  );
};
export default CourseList;