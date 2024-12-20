"use client";
import Image from "next/image";
import React, { useLayoutEffect, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCourseField, setForm } from "../redux/AppSlice";
import { useRouter } from "next/navigation";
import { setIsPreview } from "../redux/AppSlice";
import { capitalizeWords, customStyles } from "../utility";
import Modal from "react-modal";
import { setConfirmForm } from "../redux/AppSlice";

const ViewCollege = ({ data, addCollege, deleteCollege, type }) => {
  const router = useRouter();
  const disPatch = useDispatch();
  const form = useSelector((state) => state.app.form);
  const auth = useSelector((state) => state.app.auth);
  const confirmForm = useSelector((state) => state.app.confirmForm);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     disPatch(
  //       setForm({
  //         isForm: true,
  //         title: data?.collegeName,
  //         type: "counseling",
  //         logo: data?.logo,
  //       })
  //     );
  //   }, 5000);

  //   if (form?.isForm) {
  //     clearTimeout(timer);
  //   }
  //   return () => clearTimeout(timer);
  // }, [form?.isForm]);

  return (
    <React.Fragment>
      <div
        id="college-page"
        style={{ display: "flex", justifyContent: "center" }}
        className="mb-30">
        <div className="college-page">
          <div className="template">
            {auth && auth?.email === "collegetsainfo@gmail.com" && (
              <div className="template-action-icons">
                <Image
                  src="/images/edit.png"
                  width={20}
                  height={20}
                  alt=""
                  onClick={() => disPatch(setIsPreview(false))}
                  className="cursor-pointer template-icons"
                />
                <Image
                  src="/images/add.png"
                  width={20}
                  height={20}
                  alt=""
                  onClick={addCollege}
                  className="cursor-pointer template-icons ml-20"
                />
                {type === "edit" && (
                  <Image
                    src="/images/delete.png"
                    width={20}
                    height={20}
                    alt=""
                    className="cursor-pointer template-icons ml-20"
                    onClick={() => {
                      disPatch(setConfirmForm({ isForm: true, deleteId: "" }));
                    }}
                  />
                )}
              </div>
            )}
            <div
              className="content-page"
              style={{
                display: "flex",
                alignItems: "start",
              }}>
              <Image
                src={data?.logo}
                width={50}
                height={50}
                alt=""
                className="cursor-pointer"
                onClick={() => {
                  disPatch(
                    setForm({
                      isForm: true,
                      title: data?.collegeName,
                      type: "counseling",
                      logo: data?.logo,
                    })
                  );
                }}
                unoptimized
              />
              <div className="ml-20">
                <h1
                  className="two-line-text cursor-pointer font-head"
                  onClick={() => {
                    disPatch(
                      setForm({
                        isForm: true,
                        title: data?.collegeName,
                        type: "counseling",
                        logo: data?.logo,
                      })
                    );
                  }}>
                  {data?.collegeName}: Admission {new Date().getFullYear()},
                  Cutoff, Courses, Fees, Placement, Ranking
                </h1>
                <div className="mt-10 template-icons-group">
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="mt-10">
                    <Image
                      src="/images/address.png"
                      width={17}
                      height={17}
                      alt=""
                      className="template-icons"
                    />
                    <span className="one-line-text ml-10">
                      {capitalizeWords(data?.location)}
                    </span>
                  </div>
                  <div className="separete-line mt-10">|</div>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="mt-10">
                    <Image
                      src="/images/ownership.png"
                      width={17}
                      height={17}
                      alt=""
                      className="template-icons"
                    />
                    <span className="one-line-text ml-10">
                      {capitalizeWords(data?.ownership)}
                    </span>{" "}
                  </div>
                  <div className="separete-line mt-10">|</div>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="mt-10">
                    <Image
                      src="/images/college.png"
                      width={17}
                      height={17}
                      alt=""
                      className="template-icons"
                    />
                    <span className="one-line-text ml-10">
                      {capitalizeWords(data?.university)}
                    </span>
                  </div>
                  <div className="separete-line mt-10">|</div>
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                    className="mt-10">
                    <Image
                      src="/images/category.png"
                      width={17}
                      height={17}
                      alt=""
                      className="template-icons"
                    />
                    <span className="one-line-text ml-10">
                      {capitalizeWords(data?.collegeType)}
                    </span>
                  </div>
                </div>
                <div className="template-action-group mt-30">
                  <button
                    className="btn"
                    onClick={() => {
                      disPatch(
                        setForm({
                          isForm: true,
                          title: data?.collegeName,
                          type: "admission",
                          logo: data?.logo,
                        })
                      );
                    }}>
                    Apply College
                  </button>
                  <button
                    className="btn ml-20"
                    onClick={() =>
                      document
                        .getElementById("course-list")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }>
                    Available Courses
                  </button>
                  <button
                    className="btn ml-20"
                    onClick={() => {
                      router.push("/college");
                      disPatch(setCourseField(""));
                    }}>
                    More Colleges
                  </button>
                </div>
                <div className="template-action-group-sm mt-30">
                  <p
                    onClick={() => {
                      disPatch(
                        setForm({
                          isForm: true,
                          title: data?.collegeName,
                          type: "admission",
                          logo: data?.logo,
                        })
                      );
                    }}>
                    <u>Apply</u>
                  </p>
                  <p
                    onClick={() =>
                      document
                        .getElementById("course-list")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }>
                    <u>Available Courses</u>
                  </p>
                  <p
                    onClick={() => {
                      router.push("/college");
                      disPatch(setCourseField(""));
                    }}>
                    <u>More Colleges</u>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}>
            <div
              className="mt-20 content-page content-page-html"
              dangerouslySetInnerHTML={{ __html: data?.content }}></div>
            {data?.course?.length > 0 && (
              <div
                className="content-page"
                id="course-list"
                style={{
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  textWrap: "nowrap",
                }}>
                <table id="customers">
                  <tbody>
                    <tr>
                      <th>#</th>
                      <th>Available Courses</th>
                      <th>Fees</th>
                      <th>Addmission {new Date().getFullYear()}</th>
                    </tr>
                    {data?.course?.map((item, index) => (
                      <tr
                        key={index}
                        className="cursor-pointer"
                        onClick={() => {
                          disPatch(
                            setForm({
                              isForm: true,
                              title: data?.collegeName,
                              type: "admission",
                              logo: data?.logo,
                              course: item?.courseName,
                            })
                          );
                        }}>
                        <td>{index + 1}</td>
                        <td>{item?.courseName}</td>
                        <td>{item?.fees?.length > 0 ? item?.fees : "NA"}</td>
                        <td>Apply Now</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        <Image
          src="/images/top.png"
          width={30}
          height={30}
          alt=""
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            backgroundColor: "#fff",
            borderRadius: "100px",
            cursor: "pointer",
          }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      </div>
      <Modal
        isOpen={confirmForm?.isForm}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}>
        <div className="confirm">
          <p className="mb-20">Are you confirm to delete?</p>
          <div>
            <button className="btn" onClick={deleteCollege}>
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

export default ViewCollege;