"use client";
import React, { useEffect, useState, useLayoutEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { setIsPreview } from "../redux/AppSlice";
import { useDebounce } from "use-debounce";
import { capitalizeWords } from "../utility";
import PaginatedItems from "./PaginatedItems";

const CollegeList = ({ CollegeLists, searchParams, totalColleges }) => {
  const router = useRouter();
  const disPatch = useDispatch();
  const auth = useSelector((state) => state.app.auth);
  const courseField = useSelector((state) => state.app.courseField);
  const [search, setSearch] = useState(searchParams?.search || "");

  const [select, setSelect] = useState({
    collegeType: courseField,
    location: "",
    ownership: "",
    university: "",
  });

  const [locations, setLocations] = useState([]);
  const [_search] = useDebounce(search, 1000);

  useEffect(() => {
    if (_search?.length > 0) {
      updateParams("search", _search);
    }
  }, [_search]);

  function updateParams(name, value) {
    const queryParams = new URLSearchParams(searchParams);
    const searchRemove = [
      "ownership",
      "collegeType",
      "location",
      "university",
      "page",
      "search",
    ];

    if (name === "clearAll") {
      searchRemove?.forEach((key) => queryParams?.delete(key));
    }

    if (value) {
      queryParams.set(name, value);
    } else {
      queryParams.delete(name);
    }

    router.push(`/college/?${queryParams.toString()}`);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelect((prev) => {
      return { ...prev, [name]: value };
    });
    updateParams(name, value);
  };

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/college?type=location-list`
      );
      const data = await response.json();
      setLocations(data);
    };
    fetchLocation();
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div
        className="table mt-20"
        // className="table mt-20 sticky-header"
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
                  <option value="hotel-management">Hotel Management</option>
                  <option value="animation">Animation</option>
                  <option value="marine">Marine</option>
                  <option value="education">Education</option>
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
                  {locations?.map((item, index) => (
                    <option key={index} value={item?._id?.toLowerCase()}>
                      {item?._id}
                    </option>
                  ))}
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
                  <option value="self-finance">Self finance/Affiliated</option>
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
          <div
            className="ml-20 cursor-pointer"
            onClick={() => {
              setSelect({
                collegeType: "",
                location: "",
                ownership: "",
                university: "",
              });
              setSearch("");
              updateParams("clearAll");
            }}>
            <Image src="/images/reset.png" width={20} height={20} alt="" />
          </div>
        </div>
        <input
          className="input input-search mt-20 mb-20"
          type="search"
          placeholder="Search Your College, Course, University"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            if (e.target.value?.length === 0) {
              updateParams("search", e.target.value);
            }
          }}
        />
      </div>
      <div className="table">
        <table id="customers">
          <tbody>
            <tr>
              <th>#</th>
              <th>College Name</th>
              <th>Course & Fees</th>
              <th>Ownership</th>
            </tr>
            {CollegeLists?.map((item, index) => (
              <tr
                key={index}
                className="cursor-pointer"
                onClick={() => {
                  if (auth?.email === "collegetsainfo@gmail.com") {
                    disPatch(setIsPreview(true));
                    router.push(`/admin/college/edit/${item?._id?.pageUrl}`);
                  } else {
                    router.push(`/college/${item?._id?.pageUrl}`);
                  }
                }}>
                <td>{index + 1}</td>
                <td style={{ minWidth: "500px" }}>
                  <div
                    style={{ display: "flex", alignItems: "start" }}
                    className="mt-10">
                    <Image
                      src={item?._id.logo}
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
                        className="hide-text font-head">
                        {item?._id.collegeName}
                      </h4>
                      <div
                        className="mb-20 mt-10"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#282828",
                          fontSize: "12px",
                        }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <Image
                            src="/images/address.png"
                            width={15}
                            height={15}
                            alt=""
                          />
                          <span
                            className="hide-text ml-7"
                            style={{ maxWidth: "200px" }}>
                            {capitalizeWords(item?._id?.location)}
                          </span>
                        </div>
                        <div className="separete-line2 mt-0">|</div>
                        <div
                          style={{ display: "flex", alignItems: "baseline" }}>
                          <Image
                            src="/images/college.png"
                            width={16}
                            height={16}
                            alt=""
                            unoptimized
                          />
                          <span
                            className="hide-text ml-7"
                            style={{ maxWidth: "200px" }}>
                            {capitalizeWords(item?._id?.university)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item?._id.course?.map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      className="mb-10">
                      <span className="hide-text" style={{ maxWidth: "250px" }}>
                        {item?.courseName}
                      </span>
                      <span className="hide-text" style={{ maxWidth: "150px" }}>
                        {item?.fees}
                      </span>
                    </div>
                  ))}
                  {/* <small>View more...</small> */}
                </td>
                <td className="hide-text" style={{ maxWidth: "100px" }}>
                  {capitalizeWords(item?._id?.ownership)}
                </td>
              </tr>
            ))}
            {CollegeLists?.length === 0 && (
              <tr className="cursor-pointer">
                <td colSpan={4}>
                  <div className="text-center pt-10 pb-10">No data found!</div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="table mb-30">
        <PaginatedItems
          totalColleges={totalColleges}
          searchParams={searchParams}
        />
      </div>
    </React.Fragment>
  );
};

export default CollegeList;