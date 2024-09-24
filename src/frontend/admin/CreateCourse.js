"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import toast, { Toaster } from "react-hot-toast";

const createData = {
  courseData: {
    courseName: "",
    duration: "",
    level: "",
    elgibility: "",
    mode: "",
  },
  field: "",
};
const CreateCourse = ({ type, editData }) => {
  const cookies = useCookies();
  const router = useRouter();

  const originalData = type === "edit" ? editData : createData;
  const [data, setData] = useState(originalData?.courseData);
  const [data2, setData2] = useState(originalData?.field);

  const addedCourse = () => toast.success("Course Created");
  const updatedCourse = () => toast.success("Course Updated");
  const EnterCourse = () => toast.error("Give Course Data");

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const AddCourse = async () => {
    const jwtToken = cookies.get("jwtToken");
    if (type === "create") {
      if (data?.courseName?.length > 0 && data2?.length > 0) {
        const response = await fetch("/api/course", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwtToken}`,
          },
          body: JSON.stringify({
            courseData: data,
            field: data2,
          }),
        });
        if (response.ok) {
          addedCourse();
          setData({
            courseName: "",
            duration: "",
            level: "",
            elgibility: "",
            mode: "",
          });
          router.refresh();
        }
      } else {
        EnterCourse();
      }
    } else if (type === "edit") {
      const response = await fetch(`/api/course/${editData?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({
          courseData: data,
          field: data2,
        }),
      });
      if (response.ok) {
        updatedCourse();
        router.push("/");
        router.refresh();
      }
    }
  };

  return (
    <div className="table mb-30 mt-20">
      <table id="customers" className="mb-0">
        <tbody>
          <tr>
            <th colSpan={2}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}>
                <span># Create New Course</span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={AddCourse}
                  className="cursor-pointer">
                  <Image
                    src="/images/add.png"
                    width={20}
                    height={20}
                    alt=""
                    className="template-icons ml-30"
                  />
                  <span className="ml-10">Create</span>
                </span>
              </div>
            </th>
          </tr>
          <tr>
            <td>
              <div className="did-floating-label-content mb-0">
                <select
                  className="did-floating-select"
                  name="interest"
                  value={data2}
                  onChange={(e) => setData2(e.target.value)}>
                  <option value="">Select</option>
                  <option value="engineering">Engineering</option>
                  <option value="arts-science">Arts & Science</option>
                  <option value="medical">Medical</option>
                  <option value="agriculture">Agriculture</option>
                  <option value="law">Law</option>
                  <option value="design">Design</option>
                  <option value="hotel-management">Hotel Management</option>
                  <option value="animation">Animation</option>
                  <option value="marine">Marine</option>
                  <option value="dental">Dental</option>
                  <option value="education">Education</option>
                  <option value="management">Management</option>
                  <option value="commerce">Commerce</option>
                  <option value="pharmacy">Pharmacy</option>
                </select>
                <label className="did-floating-label input-course">
                  Course Field*
                </label>
              </div>
            </td>
            <td>
              <div className="did-floating-label-content mb-0">
                <input
                  className="did-floating-input"
                  type="text"
                  placeholder=""
                  value={data?.courseName}
                  onChange={handleChange}
                  name="courseName"
                />
                <label className="did-floating-label input-college">
                  Course Name*
                </label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="did-floating-label-content mb-0">
                <select
                  className="did-floating-select"
                  name="duration"
                  value={data?.duration}
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
            </td>
            <td>
              <div className="did-floating-label-content mb-0">
                <select
                  className="did-floating-select"
                  name="level"
                  value={data?.level}
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
            </td>
          </tr>
          <tr>
            <td>
              <div className="did-floating-label-content mb-0">
                <select
                  className="did-floating-select"
                  name="elgibility"
                  value={data?.elgibility}
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
            </td>
            <td>
              <div className="did-floating-label-content mb-0">
                <select
                  className="did-floating-select"
                  name="mode"
                  value={data?.mode}
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CreateCourse;