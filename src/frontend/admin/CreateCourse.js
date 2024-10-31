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
              <div className="did-floating-label-content mb-20">
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
                  <option value="hotel-management">Hotel Management</option>
                  <option value="animation">Animation</option>
                  <option value="marine">Marine</option>
                  <option value="education">Education</option>
                </select>
                <label className="did-floating-label input-course">
                  Course Field*
                </label>
              </div>
              <div className="did-floating-label-content mb-20">
                <select
                  className="did-floating-select"
                  name="duration"
                  value={data?.duration}
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
              <div className="did-floating-label-content mb-10">
                <select
                  className="did-floating-select"
                  name="elgibility"
                  value={data?.elgibility}
                  onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="10th Pass">10th Pass</option>
                  <option value="12th Pass">12th Pass</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                </select>
                <label className="did-floating-label input-ownership">
                  Eligibility*
                </label>
              </div>
            </td>
            <td>
              <div className="did-floating-label-content mb-20">
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
              <div className="did-floating-label-content mb-20">
                <select
                  className="did-floating-select"
                  name="level"
                  value={data?.level}
                  onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Under Graduate[UG]">Under Graduate[UG]</option>
                  <option value="Post Graduate[PG]">Post Graduate[PG]</option>
                  <option value="PhD">PhD</option>
                  <option value="Diploma">Diploma</option>
                  <option value="Post Diploma">Post Diploma</option>
                  <option value="Certificate Course">Certificate Course</option>
                </select>
                <label className="did-floating-label input-address">
                  Course Level*
                </label>
              </div>
              <div className="did-floating-label-content mb-10">
                <select
                  className="did-floating-select"
                  name="mode"
                  value={data?.mode}
                  onChange={handleChange}>
                  <option value="">Select</option>
                  <option value="Full Time">Full Time</option>
                  <option value="Part Time">Part Time</option>
                  <option value="Distance">Distance</option>
                  <option value="On Campus">On Campus</option>
                  <option value="Off Campus">Off Campus</option>
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