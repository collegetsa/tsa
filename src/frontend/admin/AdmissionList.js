"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

export default function AdmissionList({ data }) {
  const cookies = useCookies();
  const router = useRouter();

  const editList = async (option, item) => {
    const jwtToken = cookies.get("jwtToken");
    const response = await fetch(`/api/admission/${item?._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({ status: option }),
    });
  };

  const deleteList = async (item) => {
    const jwtToken = cookies.get("jwtToken");
    const response = await fetch(`/api/admission/${item?._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    if (response.ok) {
      router.refresh();
    }
  };

  return (
    <div className="table mb-30 mt-20">
      <table id="customers">
        <tbody>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Email Address</th>
            <th>Student Phone</th>
            <th>MarkSheet</th>
            <th>DOB</th>
            <th>Applied Course</th>
            <th>Applied College</th>
            <th>Father Name</th>
            <th>Parent's Phone</th>
            <th>Religion</th>
            <th>Community</th>
            <th>Address</th>
            <th>Message</th>
            <th>AppliedDate</th>
            <th>Status</th>
          </tr>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item?.studentName}</td>
              <td>{item?.email}</td>
              <td>{item?.studentPhone}</td>
              <td>
                <a href={item?.markSheet} target="_blank">
                  download
                </a>
              </td>
              <td>{item?.dateOfBirth}</td>
              <td>{item?.appliedCourse}</td>
              <td>{item?.appliedCollege}</td>
              <td>{item?.fatherName}</td>
              <td>{item?.parentPhone}</td>
              <td>{item?.religion}</td>
              <td>{item?.community}</td>
              <td>{item?.address}</td>
              <td>{item?.message}</td>
              <td>{item?.appliedDate}</td>
              <td>
                <div style={{ display: "flex" }}>
                  <select onChange={(e) => editList(e.target.value, item)}>
                    <option value={item?.status}>{item?.status}</option>
                    <option value="Done">Done</option>
                    <option value="Pending">Pending</option>
                    <option value="Not start">Not start</option>
                  </select>
                  <Image
                    src="/images/delete.png"
                    width={15}
                    height={15}
                    alt=""
                    onClick={() => deleteList(item)}
                    className="cursor-pointer ml-20"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
