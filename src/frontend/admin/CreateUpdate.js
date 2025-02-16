"use client";
import React, { useState } from "react";
import EditorQuill from "./Editor";
import Image from "next/image";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";

const createData = { title: "", description: "", content: "" };

export default function CreateUpdate({ type, editData }) {
  const router = useRouter();
  const cookies = useCookies();
  const _data = type === "create" ? createData : editData;
  const [data, setData] = useState(_data);

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const pageUrl = data?.title
    ?.match(/[^!@#$%^&*?{},.;:/+~()<>]/g)
    ?.join("")
    ?.toLocaleLowerCase()
    ?.replaceAll(" ", "-");

  const handleUpdate = async (_type) => {
    const jwtToken = cookies.get("jwtToken");
    if (_type === "create") {
      const response = await fetch("/api/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ ...data, pageUrl }),
      });
      const responseData = await response.json();
      if (response.ok) {
        alert("New Update Posted");
        router.push("/");
      } else {
        alert(responseData?.message);
      }
    } else if (_type === "edit") {
      const response = await fetch(`/api/update/${data?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ ...data, pageUrl }),
      });

      if (response.ok) {
        alert("Updated Successfull");
        router.push("/");
      }
    } else if (_type === "delete") {
      const response = await fetch(`/api/update/${data?._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify({ ...data, pageUrl }),
      });

      if (response.ok) {
        alert("Deleted Successfull");
        router.push("/");
      }
    }
  };

  return (
    <React.Fragment>
      <div className="table mt-30 admin">
        <table id="customers" className="mb-0">
          <tbody>
            <tr>
              <th colSpan={2}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}>
                  <span>
                    {type === "create"
                      ? "# Create New Update"
                      : "# Update Data"}
                  </span>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}>
                    <span
                      onClick={() => handleUpdate(type)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                      className="cursor-pointer">
                      <Image
                        src="/images/add.png"
                        width={20}
                        height={20}
                        alt=""
                        className="template-icons ml-30"
                      />
                      <span className="ml-10">
                        {type === "create" ? "Create" : "Update"}
                      </span>
                    </span>
                    {type === "edit" && (
                      <Image
                        src="/images/delete.png"
                        width={20}
                        height={20}
                        alt=""
                        className="template-icons ml-30 cursor-pointer"
                        onClick={() => handleUpdate("delete")}
                      />
                    )}
                  </div>
                </div>
              </th>
            </tr>
            <tr
              className="disable-table-hover"
              style={{ backgroundColor: "#fff" }}>
              <td style={{ width: "50%" }}>
                <input
                  className="did-floating-input border-0"
                  type="text"
                  placeholder="Update Title"
                  name="title"
                  onChange={handleChange}
                  value={data?.title}
                />
                <textarea
                  className="did-floating-input border-0 "
                  type="text"
                  placeholder="Update Description"
                  rows={3}
                  style={{ resize: "none" }}
                  name="description"
                  onChange={handleChange}
                  value={data?.description}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table mb-30">
        <EditorQuill data={data} setData={setData} />
      </div>
    </React.Fragment>
  );
}
