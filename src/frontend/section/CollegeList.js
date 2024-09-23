"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setIsPreview } from "../redux/AppSlice";

const CollegeList = ({ CollegeLists }) => {
  const router = useRouter();
  const disPatch = useDispatch();
  const auth = useSelector((state) => state.app.auth);
  const courseField = useSelector((state) => state.app.courseField);

  const [search, setSearch] = useState("");
  const [select, setSelect] = useState({
    collegeType: courseField,
    location: "",
    ownership: "",
    university: "",
  });

    const handleChange = (e) => {
      setSelect((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    };

    // Function to filter courses by courseName
    // const filterByCourse = (colleges, courseName) => {
    //   return colleges
    //     ?.map((college) => ({
    //       ...college,
    //       collegeData: {
    //         ...college.collegeData,
    //         course: college.collegeData.course.filter((c) =>
    //           c.courseName.toLowerCase()?.includes(courseName.toLowerCase())
    //         ),
    //       },
    //     }))
    //     .filter((college) => college.collegeData.course.length > 0);
    // };
    // const filteredColleges = filterByCourse(CollegeLists, search);

    const filtered =
      CollegeLists &&
      CollegeLists?.filter((item) => {
        let searchFilter =
          item?.collegeData?.collegeName
            ?.toLowerCase()
            ?.includes(search?.toLowerCase()) ||
          item?.collegeData?.content
            ?.toLowerCase()
            ?.includes(search?.toLowerCase()) ||
          item?.collegeData?.location
            ?.toLowerCase()
            ?.includes(search?.toLowerCase()) ||
          item?.collegeData?.ownership
            ?.toLowerCase()
            ?.includes(search?.toLowerCase()) ||
          item?.collegeData?.collegeType?.includes(search?.toLowerCase()) ||
          item?.collegeData?.university
            ?.toLowerCase()
            ?.includes(search?.toLowerCase());

        let selectFilter =
          item?.collegeData?.collegeType?.includes(
            select?.collegeType?.toLowerCase()
          ) &&
          item?.collegeData?.location
            ?.toLowerCase()
            ?.includes(select?.location?.toLowerCase()) &&
          item?.collegeData?.ownership
            ?.toLowerCase()
            ?.includes(select?.ownership?.toLowerCase()) &&
          item?.collegeData?.university
            ?.toLowerCase()
            ?.includes(select?.university?.toLowerCase());
        return searchFilter && selectFilter;
      });

    return (
      <React.Fragment>
        <div
          className="table mt-20 sticky-header"
          style={{ backgroundColor: "#fff" }}>
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
                    name="collegeType"
                    value={select.collegeType}
                    onChange={handleChange}>
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
                    Field of Interest*
                  </label>
                </div>
                <div className="did-floating-label-content ml-10 mb-0">
                  <select
                    className="did-floating-select"
                    name="location"
                    value={select.location}
                    onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="chennai">Chennai, Tamilnadu</option>
                    <option value="salem">Salem, Tamilnadu</option>
                    <option value="coimbatore">Coimbatore, Tamilnadu</option>
                    <option value="tiruchy">Tiruchy, Tamilnadu</option>
                    <option value="vellore">Vellore, Tamilnadu</option>
                  </select>
                  <label className="did-floating-label input-address">
                    Location
                  </label>
                </div>
                <div className="did-floating-label-content ml-10 mb-0">
                  <select
                    className="did-floating-select"
                    name="ownership"
                    value={select.ownership}
                    onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="private">Private</option>
                    <option value="government">Government</option>
                    <option value="self-finance">
                      Self finance/Affiliated
                    </option>
                  </select>
                  <label className="did-floating-label input-ownership">
                    Ownership
                  </label>
                </div>
                <div className="did-floating-label-content ml-10 mb-0">
                  <select
                    className="did-floating-select"
                    name="university"
                    value={select.university}
                    onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="deemed">Deemed to be University</option>
                    <option value="autonomous ">Autonomous</option>
                    <option value="affiliate">Affiliated</option>
                    <option value="central">Central University</option>
                    <option value="state">State University</option>
                    <option value="open">Open University</option>
                  </select>
                  <label className="did-floating-label input-ownership">
                    University Type*
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
                  collegeType: "",
                  location: "",
                  ownership: "",
                  university: "",
                });
                setSearch("");
              }}
            />
          </div>
          <input
            className="input input-search mt-20 mb-20"
            type="search"
            placeholder="Search your college..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="table mb-30">
          <table id="customers">
            <tbody>
              <tr>
                <th>#</th>
                <th>College Name</th>
                <th>Course & Fees</th>
                <th>Ownership</th>
              </tr>
              {filtered?.map((item, index) => (
                <tr
                  key={index}
                  className="cursor-pointer"
                  onClick={() => {
                    if (auth?.email === "collegetsainfo@gmail.com") {
                      disPatch(setIsPreview(true));
                      router.push(`/admin/college/edit/${item?.pageUrl}`);
                    } else {
                      router.push(`/college/${item?.pageUrl}`);
                    }
                  }}>
                  <td>{index + 1}</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "start" }}>
                      <Image
                        src={item?.collegeData?.logo}
                        width={40}
                        height={40}
                        alt=""
                        unoptimized
                      />
                      <div className="ml-20">
                        <h4
                          style={{
                            marginTop: "auto",
                            marginBottom: "auto",
                            maxWidth: "450px",
                          }}
                          className="hide-text">
                          {item?.collegeData?.collegeName}
                        </h4>
                        <div
                          className="mb-20 mt-10"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            color: "#282828",
                            fontSize: "12px",
                          }}>
                          <div
                            style={{ display: "flex", alignItems: "center" }}>
                            <Image
                              src="/images/address.png"
                              width={15}
                              height={15}
                              alt=""
                            />
                            <span
                              className="hide-text ml-5"
                              style={{ maxWidth: "200px" }}>
                              {item?.collegeData?.location}
                            </span>
                          </div>
                          <div className="separete-line2 mt-0">|</div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}>
                            <Image
                              src="/images/college.png"
                              width={15}
                              height={15}
                              alt=""
                              unoptimized
                            />
                            <span
                              className="hide-text ml-5"
                              style={{ maxWidth: "200px" }}>
                              {item?.collegeData?.university}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item?.collegeData?.course?.map((item, index) => {
                      return (
                        index < 2 && (
                          <div
                            key={index}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                            className="mb-10">
                            <span
                              className="hide-text"
                              style={{ maxWidth: "250px" }}>
                              {item?.courseName}
                            </span>
                            <span
                              className="hide-text"
                              style={{ maxWidth: "150px" }}>
                              {item?.fees}
                            </span>
                          </div>
                        )
                      );
                    })}
                    {/* <small>View more...</small> */}
                  </td>
                  <td className="hide-text" style={{ maxWidth: "100px" }}>
                    {item?.collegeData?.ownership}
                  </td>
                </tr>
              ))}
              {filtered?.length === 0 && (
                <tr className="cursor-pointer">
                  <td colSpan={4}>
                    <div className="text-center pt-10 pb-10">
                      No data found!
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
};

export default CollegeList;
