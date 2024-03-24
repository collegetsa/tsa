"use client";
import React, { useState } from "react";

export default function Form() {
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
    "https://v1.nocodeapi.com/arunkumarkdeveloper/google_sheets/gKYBcXbMNXePLwBq?tabId=Sheet1";

  const sendData = async () => {
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
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="contact-form">
        <h5 className="fw-700 text-center mb-20">FREE COUNSELLING</h5>
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
