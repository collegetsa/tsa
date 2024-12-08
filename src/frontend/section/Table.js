"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../redux/AppSlice";

export default function Table() {
  const disPatch = useDispatch();
  const UniversityList = useSelector((state) => state.app.UniversityList);
  return (
    <div id="university-list" className="table mb-30 mt-30">
      <table id="customers">
        <tbody>
          <tr>
            <th>#</th>
            <th>University lists in Tamilnadu</th>
            <th>Location</th>
            <th>Application {new Date().getFullYear()}</th>
          </tr>
          {UniversityList.map((item) => (
            <tr
              key={item.id}
              className="cursor-pointer"
              onClick={() => {
                disPatch(
                  setForm({
                    isForm: true,
                    title: item?.name,
                    type: "admission",
                    logo: item?.logo,
                  })
                );
              }}>
              <td>{item.id}</td>
              <td>
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="pt-5 pb-5">
                  <Image
                    src={item.logo}
                    width={30}
                    height={30}
                    alt={item.name}
                    unoptimized
                  />
                  <span className="ml-20">{item.name}</span>
                </div>
              </td>
              <td>{item.location}</td>
              <td>Apply Now</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}