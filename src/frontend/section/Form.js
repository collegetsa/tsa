"use client";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import Modal from "react-modal";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setForm } from "../redux/AppSlice";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useCookies } from "next-client-cookies";
import { customStyles } from "../utility";
import Display from "./Display";

export default function Form() {
  const cookies = useCookies();
  const disPatch = useDispatch();
  const form = useSelector((state) => state.app.form);

  const [file, setFile] = useState();
  const [isValid, setISvalid] = useState(false);
  const [isData, setIsData] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    interest: form.course,
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
    setFormData({ ...formData, ["interest"]: form.interest });
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

  const sendFreeCounseling = async () => {
    setIsData(true);
    const isSendFreeCounseling =
      testPhone.test(formData.phone) &&
      testEmail.test(formData.email) &&
      formData.studentName?.length > 1 &&
      formData.interest?.length > 1 &&
      isChecked;

    if (isSendFreeCounseling) {
      const jwtToken = cookies.get("jwtToken");
      const response = await fetch("/api/free-counseling", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsData(false);
        setISvalid(true);
        setIsChecked(false);
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
      admissionFormData.studentName?.length > 1 &&
      testEmail.test(admissionFormData.email) &&
      testPhone.test(admissionFormData.studentPhone) &&
      admissionFormData.markSheet?.length > 1 &&
      admissionFormData.appliedCourse?.length > 1 &&
      admissionFormData.appliedCollege?.length > 1 &&
      admissionFormData.dateOfBirth?.length > 1 &&
      admissionFormData.fatherName?.length > 1 &&
      testPhone.test(admissionFormData.parentPhone) &&
      admissionFormData.religion?.length > 1 &&
      admissionFormData.community?.length > 1 &&
      admissionFormData.address?.length > 1 &&
      isChecked;
    if (isSendAdmission) {
      const jwtToken = cookies.get("jwtToken");
      const response = await fetch("/api/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(admissionFormData),
      });

      if (response.ok) {
        setIsData(true);
        setISvalid(true);
        setIsChecked(false);
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

  const freeCounselingLayout = (
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
          <small>Free Counseling Form {new Date().getFullYear()}</small>
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
        style={{ display: "flex", alignItems: "start", gap: "10px" }}
        className="mt-15">
        <Image src={form.logo} width={30} height={30} alt="" unoptimized />
        <h3 className="mt-0 mb-20">{form.title}</h3>
      </div>
      {isValid ? (
        <React.Fragment>
          <h2 className="mb-10" style={{ color: "#04aa6d" }}>
            Thanks for Applying!
          </h2>
          <h3 style={{ color: "#04aa6d" }}>Our team contact you soon!</h3>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div
            style={{
              overflowY: "auto",
              scrollbarWidth: "thin",
              paddingTop: "10px",
              paddingBottom: "5px",
              marginBottom: "20px",
            }}>
            <div className="did-floating-label-content">
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
                  !isData || formData.studentName?.length > 1 ? "" : "color-red"
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
              {!testPhone.test(formData.phone) &&
                formData.phone?.length > 6 && (
                  <span style={{ color: "red", fontSize: "10px" }}>
                    Enter a valid Phone Number
                  </span>
                )}
            </div>
            <div className="did-floating-label-content">
              <select
                className="did-floating-select"
                value={formData.interest}
                onChange={handleChange}
                name="interest">
                <option value="">Select</option>
                <option value="engineering">Engineering</option>
                <option value="arts-science">Arts & Science</option>
                <option value="medical">Medical</option>
                <option value="agriculture">Agriculture</option>
                <option value="law">Law</option>
                <option value="hotel-management">Hotel Management</option>
                <option value="animation">Animation</option>
                <option value="marine">Marine</option>
                <option value="education">Education</option>
              </select>
              <label className="did-floating-label input-course">
                Field of Interest*
              </label>
            </div>
            <div className="did-floating-label-content mb-0">
              <textarea
                className="did-floating-input"
                type="text"
                placeholder=""
                value={formData.message}
                onChange={handleChange}
                name="message"
              />
              <label className="did-floating-label input-message">
                Message
              </label>
            </div>
          </div>
          <div
            className="mb-20"
            style={{ display: "flex", alignItems: "start" }}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <small
              className={`ml-10 ${!isData || isChecked ? "" : "color-red"}`}>
              I agree to CollegeTSA{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
              <Link href="/privacy-policy">Terms</Link> and provide consent to
              be contacted for promotion via e-mail, phone, etc.
            </small>
          </div>
          <button onClick={sendFreeCounseling} className="btn">
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
          <small>Admission Form {new Date().getFullYear()}</small>
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
        style={{ display: "flex", alignItems: "start", gap: "10px" }}
        className="mt-15">
        <Image src={form.logo} width={30} height={30} alt="" unoptimized />
        <h3 className="mt-0 mb-20">{form.title}</h3>
      </div>
      {isValid ? (
        <React.Fragment>
          <h2 className="mb-30" style={{ color: "#04aa6d" }}>
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
              paddingBottom: "5px",
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
                  !isData || admissionFormData.studentName?.length > 1
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
            <div className="did-floating-label-content mb-0">
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
            <div
              className="mt-20"
              style={{ display: "flex", alignItems: "start" }}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <small
                className={`ml-10 ${!isData || isChecked ? "" : "color-red"}`}>
                I agree to CollegeTSA{" "}
                <Link href="/privacy-policy">Privacy Policy</Link> and{" "}
                <Link href="/privacy-policy">Terms</Link> and provide consent to
                be contacted for promotion via e-mail, phone, etc.
              </small>
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
          <div className="form-left-content">
            <h1 className="font-head fw-600">Why Choose CollegeTSA?</h1>
            <p>
              CollegeTSA is your trusted partner in finding the best colleges
              and courses based on your marks and interest.
            </p>
            <div className="promotion-group mt-30">
              <div className="promotion">
                <Image
                  src="/images/24-7.png"
                  width={40}
                  height={40}
                  alt="24/7 free counseling"
                />
                <p>
                  <small>Free Counseling</small>
                </p>
              </div>
              <div className="promotion">
                <Image
                  src="/images/experience.png"
                  width={40}
                  height={40}
                  alt="10 years experince in carrier guidance"
                />
                <p>
                  <small>10 Years+ Experince</small>
                </p>
              </div>
              <div className="promotion">
                <Image
                  src="/images/check.png"
                  width={40}
                  height={40}
                  alt="best college & course with your marks"
                />
                <p>
                  <small>Find best college & course</small>
                </p>
              </div>
            </div>
            <div
              className="mt-30"
              style={{ display: "flex", columnGap: "10px" }}>
              <a href="tel:9677869617" style={{ color: "#fff" }}>
                <span>
                  <Image
                    src="/images/phone.png"
                    width={15}
                    height={15}
                    alt="collegetsa-call"
                    className="template-icons"
                  />
                </span>
                <span className="call-text">+91 9677869617</span>
              </a>
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
            <p className="font-12 mt-30">
              Copyright © {new Date().getFullYear()} collegetsa.com
            </p>
          </div>
        </div>
        {form?.type === "admission" ? admissionLayout : freeCounselingLayout}
      </div>
    </Modal>
  );
}