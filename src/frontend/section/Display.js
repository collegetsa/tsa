"use client";
import React from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setForm, setIsPreview } from "../redux/AppSlice";

export default function Display() {
  const disPatch = useDispatch();
  return (
    <div className="social-group-template">
      <div className="social-group">
        <a href="tel:9677869617">
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
        <a href="https://www.youtube.com/@TSASERVICES/featured" target="_blank">
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
      <button
        className="btn"
        style={{ borderRadius: "1px", padding: "10px 20px" }}
        onClick={() => {
          disPatch(
            setForm({
              isForm: true,
              title: `Free Counseling for Students`,
              type: "counseling",
              logo: "/images/freecounseling.png",
            })
          );
        }}>
        Free Counseling
      </button>
    </div>
  );
}
