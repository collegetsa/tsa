"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-section1">
        <div>
          <h6 className="fw-600 mb-20">Top Exams</h6>
          <p>JEE Main 2024</p>
          <p>NEET 2024</p>
          <p>Gate 2024</p>
          <p>CAT 2024</p>
          <p>CMAT 2024</p>
          <p>CLAT 2024</p>
        </div>
        <div>
          <h6 className="fw-600 mb-20">Admission</h6>
          <p>B.Tech</p>
          <p>B.E</p>
          <p>B.Sc</p>
          <p>MBBS</p>
          <p>B.Com</p>
          <p>BBA</p>
          <p>B.A</p>
        </div>
        <div>
          <h6 className="fw-600 mb-20">Top Jobs</h6>
          <p>Software Developer</p>
          <p>Data science</p>
          <p>Chartered accountant</p>
          <p>Investment banking</p>
          <p>Product Management</p>
          <p>Machine learning</p>
          <p>Marketing management</p>
        </div>
        <div className="d-flex flex-column gap-3">
          <h6 className="fw-600">Company</h6>
          <Link href="/university">University</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/aboard">Why Aboard Education?</Link>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "90%" }} />
      </div>
      <div className="Footer-section2">
        <a href="https://www.facebook.com/Tsaservices" target="_blank">
          <Image
            src="/image/facebook.svg"
            alt="telegram-collegetsa"
            title="telegram-collegetsa"
            width={25}
            height={25}
          />
        </a>
        <a href="https://t.me/tsaservices" target="_blank">
          <Image
            src="/image/telegram.svg"
            alt="telegram-collegetsa"
            title="telegram-collegetsa"
            width={25}
            height={25}
          />
        </a>
        <a href="https://www.youtube.com/@TSASERVICES/featured" target="_blank">
          <Image
            src="/image/youtube.svg"
            alt="youtube-collegetsa"
            title="youtube-collegetsa"
            width={25}
            height={25}
          />
        </a>
        <a
          href="https://www.instagram.com/tsa_services_education_gudie?igsh=MTluN25yN2E0MDlzZg=="
          target="_blank"
        >
          <Image
            src="/image/instagram.svg"
            alt="instagram-collegetsa"
            title="instagram-collegetsa"
            width={25}
            height={25}
          />
        </a>
        <a href="https://wa.me/qr/XAKKC4YOZ5OBG1" target="_blank">
          <Image
            src="/image/whatsapp.svg"
            alt="whatsapp-collegetsa"
            title="whatsapp-collegetsa"
            width={25}
            height={25}
          />
        </a>
      </div>
      <div className="mt-20 Footer-section3">
        <a href="tel:9677869617" className="contact mr-30">
          <span className="mr-10">
            <Image
              src="/image/call.png"
              width={25}
              height={25}
              alt="collegetsa-call"
            />
          </span>
          <span className="call-text">+91 9677869617</span>
        </a>
        <a href="mailto:collegetsainfo@gmail.com" className="contact">
          <span className="mr-10">
            <Image
              src="./image/mail.svg"
              width={25}
              height={25}
              alt="collegetsa-email"
            />
          </span>
          <span className="call-text">collegetsainfo@gmail.com</span>
        </a>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "90%" }} />
      </div>
      <p className="fw-600 text-center mt-10">
        Copyright © 2024 collegetsa.com
      </p>
    </footer>
  );
}
