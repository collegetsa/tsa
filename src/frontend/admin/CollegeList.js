"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

const CollegeList = ({ CollegeLists }) => {
  const router = useRouter();
  const auth = useSelector((state) => state.app.auth);
  return (
    <div className="table mb-30 mt-20">
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
                      <div className="ml-10 mr-10">|</div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Image
                          src="/images/category.png"
                          width={17}
                          height={17}
                          alt=""
                          unoptimized
                        />
                        <span
                          className="hide-text ml-5"
                          style={{ maxWidth: "200px" }}>
                          {item?.collegeData?.collegeType}
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
  );
};

export default CollegeList;