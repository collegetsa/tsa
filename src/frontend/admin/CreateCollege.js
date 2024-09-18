"use client";
import React, { useEffect, useState } from "react";
import EditorQuill from "./Editor";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import ViewCollege from "../section/ViewCollege";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";
import Keywords from "./Keywords";

const CreateCollege = ({ type, editData }) => {
  const cookies = useCookies();
  const router = useRouter();
  const createData = {
    collegeData: {
      logo: "",
      collegeName: "",
      university: "",
      collegeType: [],
      location: "",
      ownership: "",
      course: [],
      content: "",
    },
    keywords: [],
    pageUrl: "",
  };

  const originalData = type === "edit" ? editData : createData;

  const [data, setData] = useState(originalData?.collegeData);
  const [data2, setData2] = useState(originalData?.keywords);

  const [isPreview, setIsPreview] = useState(false);
  const [isEditCourse, setIsEditCourse] = useState(false);
  const [courseList, setCourseList] = useState({ courseName: "", fees: "" });

  console.log(data?.collegeType);

  const addedCollege = () => toast.success("College Created");
  const updatedCollege = () => toast.success("College Updated");
  const deletedCollege = () => toast.success("College Deleted");
  const EnterCourse = () => toast.error("Give a Course");

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleChange2 = (e) => {
    setCourseList((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const addField = (e) => {
    let temp = [...data?.collegeType];

    setData((prev) => {
      if (!temp?.includes(e.target.value) && e.target.value !== "") {
        return { ...prev, [e.target.name]: [...temp, e.target.value] };
      } else {
        return { ...prev, [e.target.name]: temp };
      }
    });
  };

  const addCourse = () => {
    if (courseList.courseName?.length === 0) {
      EnterCourse();
      return;
    }
    setData({ ...data, ["course"]: [...data?.course, courseList] });
    setCourseList({ courseName: "", fees: "" });
  };

  const editCourse = (e, index) => {
    let temp = data?.course;
    temp[index][e.target.name] = e.target.value;
    setData({ ...data, ["course"]: temp });
  };

  Array.prototype.myPop = function (position) {
    let existingArray = [];
    for (let index = 0; index < this.length; index++) {
      if (index < position) {
        existingArray[index] = this[index];
      } else if (index > position) {
        existingArray[index - 1] = this[index];
      }
    }
    return existingArray;
  };

  const deleteCourse = (index) => {
    let temp = data?.course?.myPop(index);
    setData({ ...data, ["course"]: temp });
  };

  const pageUrl = data?.collegeName
    ?.match(/[^!@#$%^&*?{},.;:/+~()<>]/g)
    ?.join("")
    ?.toLocaleLowerCase()
    ?.replaceAll(" ", "-");

  const addCollege = async () => {
    const jwtToken = cookies.get("jwtToken");
    if (type === "create") {
      const response = await fetch("/api/college", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ collegeData: data, keywords: data2, pageUrl }),
      });
      if (response.ok) {
        addedCollege();
        router.push("/college");
        router.refresh();
      }
    } else if (type === "edit") {
      const response = await fetch(`/api/college/${editData?.pageUrl}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ collegeData: data, keywords: data2, pageUrl }),
      });
      if (response.ok) {
        updatedCollege();
        router.push("/college");
        router.refresh();
      }
    }
  };

  const deleteCollege = async () => {
    const jwtToken = cookies.get("jwtToken");
    const response = await fetch(`/api/college/${editData?.pageUrl}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    if (response.ok) {
      deletedCollege();
      router.push("/college");
      router.refresh();
    }
  };

  const [isEditKeyword, setIsEditKeyword] = useState(false);

  return (
    <React.Fragment>
      {!isPreview ? (
        <React.Fragment>
          {isEditKeyword ? (
            <Keywords
              data={data2}
              setData={setData2}
              setIsEditKeyword={setIsEditKeyword}
            />
          ) : (
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
                        <span> # Create New College</span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="cursor-pointer"
                          onClick={() => setIsEditKeyword(true)}>
                          <Image
                            src="/images/edit.png"
                            width={20}
                            height={20}
                            alt=""
                            className="template-icons ml-30"
                          />
                          <span className="ml-10">SEO Keywords</span>
                        </span>
                        <span
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                          className="cursor-pointer"
                          onClick={() => setIsPreview(true)}>
                          <Image
                            src="/images/preview.png"
                            width={20}
                            height={20}
                            alt=""
                            className="template-icons ml-30"
                          />
                          <span className="ml-10">Preview</span>
                        </span>
                      </div>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <div className="did-floating-label-content mb-0">
                        <input
                          className="did-floating-input"
                          type="text"
                          placeholder=""
                          value={data?.logo}
                          onChange={handleChange}
                          name="logo"
                        />
                        <label className="did-floating-label input-image">
                          College Logo*
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="did-floating-label-content mb-0">
                        <input
                          className="did-floating-input"
                          type="text"
                          placeholder=""
                          value={data?.collegeName}
                          onChange={handleChange}
                          name="collegeName"
                        />
                        <label className="did-floating-label input-college">
                          College Name*
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="did-floating-label-content mb-0">
                        <input
                          className="did-floating-input"
                          type="text"
                          placeholder=""
                          value={data?.location}
                          onChange={handleChange}
                          name="location"
                        />
                        <label className="did-floating-label input-address">
                          Location*
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="did-floating-label-content mb-0">
                        <input
                          className="did-floating-input"
                          type="text"
                          placeholder=""
                          value={data?.ownership}
                          onChange={handleChange}
                          name="ownership"
                        />
                        <label className="did-floating-label input-ownership">
                          Ownership*
                        </label>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="did-floating-label-content mb-0">
                        <input
                          className="did-floating-input"
                          type="text"
                          placeholder=""
                          value={data?.university}
                          onChange={handleChange}
                          name="university"
                        />
                        <label className="did-floating-label input-college">
                          University*
                        </label>
                      </div>
                    </td>
                    <td>
                      <div className="did-floating-label-content mb-0">
                        <input
                          className="did-floating-input"
                          type="text"
                          placeholder=""
                          value={data?.collegeType}
                          onChange={handleChange}
                          name="collegeType"
                        />
                        <label className="did-floating-label input-college">
                          College Type*
                        </label>
                      </div>
                      {/* <div className="did-floating-label-content mb-0">
                        <select
                          style={{
                            width: "max-content",
                          }}
                          className="did-floating-select"
                          name="collegeType"
                          // value={data?.collegeType}
                          onChange={addField}>
                          <option value="">Select</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Arts">Arts & Science</option>
                          <option value="Medical">Medical</option>
                          <option value="Agriculture">Agriculture</option>
                          <option value="Law">Law</option>
                          <option value="Commerce">Commerce</option>
                          <option value="Hotel Managemen">
                            Hotel Management
                          </option>
                          <option value="Computer">Computer</option>
                          <option value="Design">Design</option>
                          <option value="Pharmacy">Pharmacy</option>
                          <option value="Management">Management</option>
                          <option value="Animation">Animation</option>
                          <option value="Architecture">Architecture</option>
                          <option value="Dental">Dental</option>
                          <option value="Education">Education</option>
                          <option value="Pharamedical">Pharamedical</option>
                        </select>
                        <label className="did-floating-label input-course">
                          Available Fields*
                        </label>
                      </div>
                      {data?.collegeType?.map((item, index) => (
                        <p>{item}</p>
                      ))} */}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="did-floating-label-content mb-0">
                        <input
                          className="did-floating-input"
                          type="text"
                          placeholder=""
                          value={courseList?.courseName}
                          onChange={handleChange2}
                          name="courseName"
                        />
                        <label className="did-floating-label input-ownership">
                          Course*
                        </label>
                      </div>
                    </td>
                    <td>
                      <div
                        className="did-floating-label-content mb-0"
                        style={{ display: "flex", alignItems: "center" }}>
                        <input
                          className="did-floating-input mr-10"
                          type="text"
                          placeholder=""
                          value={courseList?.fees}
                          onChange={handleChange2}
                          name="fees"
                        />
                        <Image
                          src="/images/add.png"
                          width={20}
                          height={20}
                          alt=""
                          onClick={addCourse}
                          className="cursor-pointer"
                        />
                        <Image
                          src="/images/edit.png"
                          width={20}
                          height={20}
                          alt=""
                          onClick={() => setIsEditCourse(!isEditCourse)}
                          className="cursor-pointer ml-10"
                        />
                        <label className="did-floating-label input-ownership">
                          Fees*
                        </label>
                      </div>
                    </td>
                  </tr>
                  {isEditCourse &&
                    data?.course?.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="did-floating-label-content mb-0">
                            <input
                              className="did-floating-input"
                              type="text"
                              placeholder=""
                              value={item?.courseName}
                              onChange={(e) => editCourse(e, index)}
                              name="courseName"
                            />
                            <label className="did-floating-label input-ownership">
                              Course*
                            </label>
                          </div>
                        </td>
                        <td>
                          <div
                            className="did-floating-label-content mb-0"
                            style={{ display: "flex", alignItems: "center" }}>
                            <input
                              className="did-floating-input mr-10"
                              type="text"
                              placeholder=""
                              value={item?.fees}
                              onChange={(e) => editCourse(e, index)}
                              name="fees"
                            />
                            <Image
                              src="/images/delete.png"
                              width={15}
                              height={15}
                              alt=""
                              onClick={() => deleteCourse(index)}
                              className="cursor-pointer"
                            />
                            <label className="did-floating-label input-ownership">
                              Fees*
                            </label>
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div style={{ overflowX: "auto", scrollbarWidth: "thin" }}>
                <EditorQuill
                  handleChange={handleChange}
                  data={data}
                  setData={setData}
                />
              </div>
            </div>
          )}
        </React.Fragment>
      ) : (
        <ViewCollege
          data={data}
          setIsPreview={setIsPreview}
          addCollege={addCollege}
          deleteCollege={deleteCollege}
          type={type}
        />
      )}
    </React.Fragment>
  );
};

export default CreateCollege;