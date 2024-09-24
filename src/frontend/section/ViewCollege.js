"use client";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setCourseField, setForm } from "../redux/AppSlice";
import { useRouter } from "next/navigation";
import { setIsPreview } from "../redux/AppSlice";

const ViewCollege = ({ data, addCollege, deleteCollege, type }) => {
  const router = useRouter();
  const disPatch = useDispatch();
  const form = useSelector((state) => state.app.form);
  const auth = useSelector((state) => state.app.auth);

  // useEffect(() => {
  //   setTimeout(() => {
  //     disPatch(
  //       setForm({
  //         isForm: true,
  //         title: data?.collegeName,
  //         type: "counseling",
  //         logo: data?.logo,
  //       })
  //     );
  //   }, 5000);
  // }, []);

  const capitalizeWords = (str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

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
                  <span className="one-line-text ml-10">{data?.location}</span>
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
                  <span className="one-line-text ml-10">{data?.ownership}</span>{" "}
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
                    {data?.university}
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
                    type: "counseling",
                    logo: data?.logo,
                  })
                );
              }}>
              <u>Get FreeCounseling</u>
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
              <u>Addmission {new Date().getFullYear()}</u>
            </span>
            <span
              className="ml-20 cursor-pointer"
              onClick={() =>
                document
                  .getElementById("course-list")
                  ?.scrollIntoView({ behavior: "smooth" })
              }>
              <u>Courses</u>
            </span>
            <span
              className="ml-20 cursor-pointer"
              onClick={() => {
                router.push("/college");
                disPatch(setCourseField(""));
              }}>
              <u>Get More Colleges...</u>
            </span>
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
  );
};

export default ViewCollege;