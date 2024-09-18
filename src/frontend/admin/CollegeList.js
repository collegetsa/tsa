"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const CollegeList = ({ CollegeLists }) => {
  const router = useRouter();
  const auth = useSelector((state) => state.app.auth);

  const [search, setSearch] = useState("");
  const [select, setSelect] = useState({
    collegeType: "",
    location: "",
    ownership: "",
    university: "",
  });

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

  const filtered = CollegeLists?.filter((item) => {
    const searchFilter =
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
        .includes(search?.toLowerCase()) ||
      item?.collegeData?.university
        ?.toLowerCase()
        .includes(search?.toLowerCase());

    const selectFilter =
      item?.collegeData?.collegeType
        ?.toLowerCase()
        .includes(select?.collegeType?.toLowerCase()) &&
      item?.collegeData?.location
        ?.toLowerCase()
        .includes(select?.location?.toLowerCase()) &&
      item?.collegeData?.ownership
        ?.toLowerCase()
        .includes(select?.ownership?.toLowerCase()) &&
      item?.collegeData?.university
        ?.toLowerCase()
        .includes(select?.university?.toLowerCase());
    return selectFilter && searchFilter;
  });

  return (
    <React.Fragment>
      <div className="table mb-30 mt-20">
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
                  name="interest"
                  value={select.collegeType}
                  onChange={(e) =>
                    setSelect({ ...select, ["collegeType"]: e.target.value })
                  }>
                  <option value="">Select</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Arts">Arts & Science</option>
                  <option value="Medical">Medical</option>
                  <option value="Agriculture">Agriculture</option>
                  <option value="Law">Law</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Hotel Managemen">Hotel Management</option>
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
                  Field of Interest*
                </label>
              </div>
              <div className="did-floating-label-content ml-10 mb-0">
                <select
                  className="did-floating-select"
                  name="interest"
                  value={select.location}
                  onChange={(e) =>
                    setSelect({ ...select, ["location"]: e.target.value })
                  }>
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
                  name="interest"
                  value={select.ownership}
                  onChange={(e) =>
                    setSelect({ ...select, ["ownership"]: e.target.value })
                  }>
                  <option value="">Select</option>
                  <option value="private">Private</option>
                  <option value="government">Government</option>
                </select>
                <label className="did-floating-label input-ownership">
                  Ownership
                </label>
              </div>
              <div className="did-floating-label-content ml-10 mb-0">
                <select
                  className="did-floating-select"
                  name="interest"
                  value={select.university}
                  onChange={(e) =>
                    setSelect({ ...select, ["university"]: e.target.value })
                  }>
                  <option value="">Select</option>
                  <option value="deemed">Deemed to be University</option>
                  <option value="affiliate">Affiliated</option>
                  <option value="autonomous ">Autonomous</option>
                  <option value="constituent">constituent</option>
                </select>
                <label className="did-floating-label input-ownership">
                  College Type
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
                        className="mb-20 mt-7"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#282828",
                        }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Image
                            src="/images/address.png"
                            width={17}
                            height={17}
                            alt=""
                          />
                          <span
                            className="hide-text ml-5"
                            style={{ maxWidth: "200px" }}>
                            {item?.collegeData?.location}
                          </span>
                        </div>
                        <div className="separete-line mt-0">|</div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Image
                            src="/images/college.png"
                            width={17}
                            height={17}
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
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default CollegeList;
