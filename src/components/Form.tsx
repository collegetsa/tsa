"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Form() {
  const contact = () =>
    toast.success("Congratulations! Our team contact you immediately");

  const allField = () => toast.error("All fields are necessary!");

  const [data, setData] = useState({
    name: "",
    phone: "",
    field: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const apiURL =
    "https://v1.nocodeapi.com/tsa/google_sheets/AsrSsaWgDORJztfq?tabId=Sheet1";

  const sendData = async () => {
    if (
      data.name.length > 0 &&
      data.phone.length > 0 &&
      data.field.length > 0 &&
      data.message.length > 0
    ) {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          [
            data.name,
            data.phone,
            data.field,
            data.message,
            new Date().toLocaleString(),
          ],
        ]),
      });

      if (response.ok) {
        setData({ ...data, name: "", phone: "", field: "", message: "" });
        contact();
      }
    } else {
      allField();
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <Toaster position="top-center" />
      <div className="contact-form">
        <h5 className="fw-700 text-center mb-20">
          Apply Now (100% FREE COUNSELLING)
        </h5>
        <span className="fw-600">Name</span>
        <input
          value={data.name}
          name="name"
          onChange={handleChange}
          className="form-input mb-20 mt-10"
        />
        <span className="fw-600">Phone Number</span>
        <input
          value={data.phone}
          type="number"
          name="phone"
          onChange={handleChange}
          className="form-input mb-20 mt-10"
        />
        <span className="fw-600">Field of Interest</span>
        <input
          value={data.field}
          name="field"
          onChange={handleChange}
          className="form-input mb-20 mt-10"
        />
        <span className="fw-600">Message</span>
        <textarea
          value={data.message}
          name="message"
          onChange={handleChange}
          className="form-input mb-20 mt-10"
          rows={5}
        />
        <button onClick={sendData} className="button">
          Submit
        </button>
      </div>
    </div>
  );
}
