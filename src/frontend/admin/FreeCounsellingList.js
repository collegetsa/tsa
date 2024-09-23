"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "next-client-cookies";

export default function FreeCounsellingList({ data }) {
  const cookies = useCookies();
  const router = useRouter();

  const editList = async (option, item) => {
    const jwtToken = cookies.get("jwtToken");
    const response = await fetch(`/api/free-counselling/${item?._id}`, {
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
    const response = await fetch(`/api/free-counselling/${item?._id}`, {
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
            <th>Phone Number</th>
            <th>Email Address</th>
            <th>Field of Interest</th>
            <th>Applied Data</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item?.studentName}</td>
              <td>
                <a href={`tel:${item?.phone}`}>
                  <span>{item?.phone}</span>
                </a>
              </td>
              <td>
                <a href={`mailto:${item?.email}`}>
                  <span>{item?.email}</span>
                </a>
              </td>
              <td>{item?.interest}</td>
              <td>{item?.appliedDate}</td>
              <td>{item?.message}</td>
              <td>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
