"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../redux/AppSlice";
import toast, { Toaster } from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Form() {
  const disPatch = useDispatch();
  const form = useSelector((state) => state.app.form);

  const [file, setFile] = useState();
  const [isValid, setISvalid] = useState(false);
  const [isData, setIsData] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    interest: "Engineering",
    message: "",
    status: "Not start",
  });

  const [admissionFormData, setAdmissionFormData] = useState({
    studentName: "",
    email: "",
    studentPhone: "",
    markSheet: file,
    dateOfBirth: "",
    appliedCourse: form.course,
    appliedCollege: form.title,
    fatherName: "",
    parentPhone: "",
    religion: "",
    community: "",
    address: "",
    message: "",
    status: "Not start",
  });

  function uploadFile(e) {
    const selectedFile = e.target.files[0];
    // setFile(URL.createObjectURL(selectedFile));

    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result); // This is the base64 string of the image
    };
    reader.readAsDataURL(selectedFile); // Reads the file as a data URL
  }

  useEffect(() => {
    setAdmissionFormData({
      ...admissionFormData,
      ["markSheet"]: file,
    });
  }, [file]);

  useEffect(() => {
    setAdmissionFormData({
      ...admissionFormData,
      ["appliedCollege"]: form.title,
      ["appliedCourse"]: form.course,
    });
    if (document) {
      document.body.style.overflow = form.isForm ? "hidden" : "auto";
    }
  }, [form]);

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleChange2 = (e) => {
    setAdmissionFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const enterForm = () => toast.error("Enter all the details");
  const testPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const sendFreeCounsling = async () => {
    setIsData(true);
    const isSendFreeCounsling =
      testPhone.test(formData.phone) &&
      testEmail.test(formData.email) &&
      formData.studentName.length > 1 &&
      formData.interest.length > 1;
    
    if (isSendFreeCounsling) {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/free-counsling", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsData(false);
        setISvalid(true);
        setFormData({
          studentName: "",
          phone: "",
          interest: "Engineering",
          message: "",
          status: "Not start",
        });
        setTimeout(() => {
          disPatch(setForm({ ...formData, ["isForm"]: false }));
          setISvalid(false);
        }, 5000);
      }
    } else {
      enterForm();
    }
  };

  const sendAdmission = async () => {
    setIsData(true);
    const isSendAdmission =
      admissionFormData.studentName.length > 1 &&
      testEmail.test(admissionFormData.email) &&
      testPhone.test(admissionFormData.studentPhone) &&
      admissionFormData.markSheet.length > 1 &&
      admissionFormData.appliedCourse.length > 1 &&
      admissionFormData.appliedCollege.length > 1 &&
      admissionFormData.dateOfBirth.length > 1 &&
      admissionFormData.fatherName.length > 1 &&
      testPhone.test(admissionFormData.parentPhone) &&
      admissionFormData.religion.length > 1 &&
      admissionFormData.community.length > 1 &&
      admissionFormData.address.length > 1; 
    if (isSendAdmission) {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(admissionFormData),
      });

      if (response.ok) {
        setIsData(true);
        setISvalid(true);
        setAdmissionFormData({
          studentName: "",
          dateOfBirth: "",
          appliedCourse: "",
          appliedCollege: "",
          studentPhone: "",
          fatherName: "",
          parentPhone: "",
          religion: "",
          community: "",
          address: "",
          groupHSC: "",
          examNumber: "",
          totalMarks: "",
          message: "",
          status: "Not start",
        });
      }
    } else {
      enterForm();
    }
  };

  const freeCounslingLayout = (
    <div className="form-right">
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="mb-10">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Image
            src="/images/logo.png"
            width={20}
            height={20}
            alt=""
            unoptimized
          />
          <small>
            <b>Free Counsling 2024</b>
          </small>
        </div>
        <Image
          src="/images/close.png"
          width={20}
          height={20}
          className="cursor-pointer"
          alt=""
          onClick={() => {
            disPatch(setForm({ ...formData, ["isForm"]: false }));
            setISvalid(false);
            setIsData(false);
          }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Image src={form.logo} width={30} height={30} alt="" unoptimized />
        <h3>{form.title}</h3>
      </div>
      {isValid ? (
        <React.Fragment>
          <h2 className="mb-10" style={{ color: "#00547A" }}>
            Thanks for Applying!
          </h2>
          <h3 style={{ color: "#00547A" }}>Our team contact you soon!</h3>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="did-floating-label-content mt-25">
            <input
              className="did-floating-input"
              type="text"
              placeholder=""
              value={formData.studentName}
              onChange={handleChange}
              name="studentName"
            />
            <label
              className={`did-floating-label input-student ${
                !isData || formData.studentName.length > 1 ? "" : "color-red"
              }`}>
              Student Name*
            </label>
          </div>
          <div className="did-floating-label-content">
            <input
              className="did-floating-input"
              type="email"
              placeholder=""
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
            <label
              className={`did-floating-label input-email ${
                !isData || testEmail.test(formData.email) ? "" : "color-red"
              }`}>
              Email Address*
            </label>
            {!testEmail.test(formData?.email) &&
              formData?.email?.length > 4 && (
                <span style={{ color: "red", fontSize: "10px" }}>
                  Enter a valid Email Address
                </span>
              )}
          </div>
          <div className="did-floating-label-content">
            <input
              className="did-floating-input"
              type="tel"
              placeholder=""
              value={formData.phone}
              onChange={handleChange}
              name="phone"
            />
            <label
              className={`did-floating-label input-phone ${
                !isData || testPhone.test(formData.phone) ? "" : "color-red"
              }`}>
              Phone Number*
            </label>
            {!testPhone.test(formData.phone) && formData.phone.length > 6 && (
              <span style={{ color: "red", fontSize: "10px" }}>
                Enter a valid Phone Number
              </span>
            )}
          </div>
          <div className="did-floating-label-content">
            <select
              className="did-floating-select"
              onChange={handleChange}
              value={formData.interest}
              name="interest">
              <option value="Engineering">Engineering</option>
              <option value="Arts & Science">Arts & Science</option>
              <option value="Medical">Medical</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Law">Law</option>
              <option value="Commerce">Commerce</option>
              <option value="Hotel Managemen">Hotel Management</option>
              <option value="Computer">Computer</option>
              <option value="Design">Design</option>
              <option value="Pharmacy">Pharmacy</option>
              <option value="Management">Management</option>
              <option value="Animation">Animation</option>
              <option value="Architecture">Architecture</option>
              <option value="Dental">Dental</option>
              <option value="Education">Education</option>
              <option value="Pharamedical">Pharamedical</option>
            </select>
            <label className="did-floating-label input-course">
              Field of Interest*
            </label>
          </div>
          <div className="did-floating-label-content">
            <textarea
              className="did-floating-input"
              type="text"
              placeholder=""
              value={formData.message}
              onChange={handleChange}
              name="message"
            />
            <label className="did-floating-label input-message">Message</label>
          </div>
          <button onClick={sendFreeCounsling} className="btn">
            Submit
          </button>
        </React.Fragment>
      )}
    </div>
  );

  const admissionLayout = (
    <div className="form-right">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        className="mb-10">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
          <Image
            src="/images/logo.png"
            width={20}
            height={20}
            alt=""
            unoptimized
          />
          <small>
            <b>Admission Form 2024</b>
          </small>
        </div>
        <Image
          src="/images/close.png"
          width={20}
          height={20}
          className="cursor-pointer"
          alt=""
          onClick={() => {
            disPatch(setForm({ ...formData, ["isForm"]: false }));
            setISvalid(false);
            setIsData(false);
          }}
        />
      </div>
      <div
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
        className="mb-10">
        <Image src={form.logo} width={30} height={30} alt="" unoptimized />
        <h3>{form.title}</h3>
      </div>
      {isValid ? (
        <React.Fragment>
          <h2 className="mb-30" style={{ color: "#00547A" }}>
            Your Admission Submitted Successfully!
          </h2>
          <a
            href="https://rzp.io/l/OM8Suhk"
            target="_blank"
            onClick={() => {
              disPatch(setForm({ ...formData, ["isForm"]: false }));
              setISvalid(false);
            }}>
            <button className="btn">Go To Payment</button>
          </a>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div
            style={{
              overflowY: "auto",
              scrollbarWidth: "thin",
              paddingTop: "10px",
              marginBottom: "20px",
            }}>
            <div className="did-floating-label-content">
              <input
                className="did-floating-input"
                type="text"
                placeholder=""
                value={admissionFormData.studentName}
                onChange={handleChange2}
                name="studentName"
              />
              <label
                className={`did-floating-label input-student ${
                  !isData || admissionFormData.studentName.length > 1
                    ? ""
                    : "color-red"
                }`}>
                Student Name*
              </label>
            </div>
            <div className="did-floating-label-content">
              <input
                className="did-floating-input"
                type="email"
                placeholder=""
                value={admissionFormData.email}
                onChange={handleChange2}
                name="email"
              />
              <label
                className={`did-floating-label input-email ${
                  !isData || testEmail.test(admissionFormData.email)
                    ? ""
                    : "color-red"
                }`}>
                Email Address*
              </label>
            </div>
            <div className="did-floating-label-content">
              <input
                className="did-floating-input"
                type="tel"
                placeholder=""
                value={admissionFormData.studentPhone}
                onChange={handleChange2}
                name="studentPhone"
              />
              <label
                className={`did-floating-label input-phone ${
                  !isData || testPhone.test(admissionFormData.studentPhone)
                    ? ""
                    : "color-red"
                }`}>
                Student Phone Number*
              </label>
            </div>
            <div className="did-floating-label-content">
              <input
                id="upload"
                className="did-floating-input"
                type="file"
                onChange={uploadFile}
                name="markSheet"
              />
              <label
                for="upload"
                className={`did-floating-label input-marksheet ${
                  !isData || admissionFormData.markSheet?.length > 1
                    ? ""
                    : "color-red"
                }`}>
                Mark Sheet*
              </label>
            </div>
            <div className="did-floating-label-content">
              <input
                className="did-floating-input"
                type="text"
                placeholder=""
                value={admissionFormData.appliedCourse}
                onChange={handleChange2}
                name="appliedCourse"
              />
              <label
                className={`did-floating-label input-course ${
                  !isData || admissionFormData.appliedCourse?.length > 1
                    ? ""
                    : "color-red"
                }`}>
                Course for Applied*
              </label>
            </div>
            <div className="did-floating-label-content">
              <input
                className="did-floating-input"
                type="date"
                placeholder=""
                value={admissionFormData.dateOfBirth}
                onChange={handleChange2}
                name="dateOfBirth"
              />
              <label
                className={`did-floating-label input-dob ${
                  !isData || admissionFormData.dateOfBirth?.length > 1
                    ? ""
                    : "color-red"
                }`}>
                DOB*
              </label>
            </div>
            <div className="did-floating-label-content">
              <input
                className="did-floating-input"
                type="text"
                placeholder=""
                value={admissionFormData.fatherName}
                onChange={handleChange2}
                name="fatherName"
              />
              <label
                className={`did-floating-label input-parent ${
                  !isData || admissionFormData.fatherName?.length > 1
                    ? ""
                    : "color-red"
                }`}>
                Father Name*
              </label>
            </div>
            <div className="did-floating-label-content">
              <input
                className="did-floating-input"
                type="text"
                placeholder=""
                value={admissionFormData.parentPhone}
                onChange={handleChange2}
                name="parentPhone"
              />
              <label
                className={`did-floating-label input-phone ${
                  !isData || testPhone.test(admissionFormData.parentPhone)
                    ? ""
                    : "color-red"
                }`}>
                Parent's Phone Number*
              </label>
            </div>
            <div className="did-floating-label-content">
              <input
                className="did-floating-input"
                type="text"
                placeholder=""
                value={admissionFormData.religion}
                onChange={handleChange2}
                name="religion"
              />
              <label
                className={`did-floating-label input-religion ${
                  !isData || admissionFormData.religion?.length > 1
                    ? ""
                    : "color-red"
                }`}>
                Religion*
              </label>
            </div>
            <div className="did-floating-label-content">
              <input
                className="did-floating-input"
                type="text"
                placeholder=""
                value={admissionFormData.community}
                onChange={handleChange2}
                name="community"
              />
              <label
                className={`did-floating-label input-community ${
                  !isData || admissionFormData.community?.length > 1
                    ? ""
                    : "color-red"
                }`}>
                Community*
              </label>
            </div>
            <div className="did-floating-label-content">
              <input
                className="did-floating-input"
                type="text"
                placeholder=""
                value={admissionFormData.address}
                onChange={handleChange2}
                name="address"
              />
              <label
                className={`did-floating-label input-address ${
                  !isData || admissionFormData.address?.length > 1
                    ? ""
                    : "color-red"
                }`}>
                Address*
              </label>
            </div>
            <div className="did-floating-label-content">
              <textarea
                className="did-floating-input"
                type="text"
                placeholder=""
                value={admissionFormData.message}
                onChange={handleChange2}
                name="message"
              />
              <label className="did-floating-label input-message">
                Message
              </label>
            </div>
          </div>
          <button onClick={sendAdmission} className="btn">
            Submit
          </button>
        </React.Fragment>
      )}
    </div>
  );

  return (
    <Modal
      isOpen={form.isForm}
      style={customStyles}
      contentLabel="Example Modal"
      ariaHideApp={false}>
      <div className="form">
        <div className="form-left">
          <h2 className="mt-70">WHY COLLEGE TSA?</h2>
          <span>For your best Course, College, Exams & Future</span>
          {/* <ul className="mb-30">
            <li>Educational Planning</li>
            <li>Clarification of Goals</li>
            <li>Confidence Building</li>
            <li>Job Placement Assistance</li>
            <li>Personalized Guidance</li>
            <li>24/7 Free Counselling</li>
          </ul> */}
          <div className="social-group mb-15 mt-30">
            <a href="https://www.facebook.com/Tsaservices" target="_blank">
              <Image
                src="/images/facebook.svg"
                alt="telegram-collegetsa"
                title="telegram-collegetsa"
                width={20}
                height={20}
              />
            </a>
            <a href="https://t.me/tsaservices" target="_blank">
              <Image
                src="/images/telegram.svg"
                alt="telegram-collegetsa"
                title="telegram-collegetsa"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://www.youtube.com/@TSASERVICES/featured"
              target="_blank">
              <Image
                src="/images/youtube.svg"
                alt="youtube-collegetsa"
                title="youtube-collegetsa"
                width={20}
                height={20}
              />
            </a>
            <a
              href="https://www.instagram.com/tsa_services_education_gudie?igsh=MTluN25yN2E0MDlzZg=="
              target="_blank">
              <Image
                src="/images/instagram.svg"
                alt="instagram-collegetsa"
                title="instagram-collegetsa"
                width={20}
                height={20}
              />
            </a>
            <a href="https://wa.me/qr/XAKKC4YOZ5OBG1" target="_blank">
              <Image
                src="/images/whatsapp.svg"
                alt="whatsapp-collegetsa"
                title="whatsapp-collegetsa"
                width={20}
                height={20}
              />
            </a>
          </div>
          <p className="font-12">Copyright © 2024 collegetsa.com</p>
        </div>
        {form?.type === "admission" ? admissionLayout : freeCounslingLayout}
      </div>
    </Modal>
  );
}