"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../redux/AppSlice";

const ViewCollege = ({
  data,
  setIsPreview,
  addCollege,
  deleteCollege,
  type,
}) => {
  const disPatch = useDispatch();
  const form = useSelector((state) => state.app.form);
  const auth = useSelector((state) => state.app.auth);

  return (
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
                onClick={() => setIsPreview(false)}
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
                  onClick={deleteCollege}
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
            <Image src={data?.logo} width={50} height={50} alt="" unoptimized />
            <div className="ml-20">
              <h1 className="two-line-text">
                {data?.collegeName}: Admission 2024, Cutoff, Courses, Fees,
                Placement, Ranking
              </h1>
              <div className="mt-10 template-icons-group">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src="/images/address.png"
                    width={17}
                    height={17}
                    alt=""
                    className="template-icons"
                  />
                  <span className="one-line-text ml-5">{data?.location}</span>
                </div>
                <div className="ml-15 mr-15">|</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src="/images/ownership.png"
                    width={17}
                    height={17}
                    alt=""
                    className="template-icons"
                  />
                  <span className="one-line-text ml-5">{data?.ownership}</span>{" "}
                </div>
                <div className="ml-15 mr-15">|</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src="/images/college.png"
                    width={17}
                    height={17}
                    alt=""
                    className="template-icons"
                  />
                  <span className="one-line-text ml-5">{data?.university}</span>
                </div>
                <div className="ml-15 mr-15">|</div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src="/images/category.png"
                    width={17}
                    height={17}
                    alt=""
                    className="template-icons"
                  />
                  <span className="one-line-text ml-5">
                    {data?.collegeType}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="template-action-group content-page mt-30">
            <span
              className="ml-20 cursor-pointer"
              onClick={() => {
                disPatch(
                  setForm({
                    isForm: true,
                    title: data?.collegeName,
                    type: "counsling",
                    logo: data?.logo,
                  })
                );
              }}>
              <u>Get FreeCounsling</u>
            </span>
            <span
              className="ml-20 cursor-pointer"
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
              <u>Addmission 2024-25</u>
            </span>
            {/* <span
              className="ml-20 cursor-pointer"
              onClick={() =>
                document.getElementById("course-list")?.scrollIntoView()
              }>
              <u>Courses</u>
            </span> */}
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
            className="mt-20 content-page"
            dangerouslySetInnerHTML={{ __html: data?.content }}></div>
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
                  <th>Addmission 2024-2025</th>
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
                    <td>{item.courseName}</td>
                    <td>{item.fees}</td>
                    <td>Apply Now</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <Image
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
        onClick={() =>
          document.getElementById("college-page")?.scrollIntoView()
        }
      /> */}
    </div>
  );
};

export default ViewCollege;