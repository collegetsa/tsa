"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-section1">
        <div>
          <h3 className="fw-600 mb-20">Top Exams</h3>
          <p>JEE Main {new Date().getFullYear()}</p>
          <p>NEET {new Date().getFullYear()}</p>
          <p>Gate {new Date().getFullYear()}</p>
          <p>CAT {new Date().getFullYear()}</p>
          <p>CMAT {new Date().getFullYear()}</p>
          <p>CLAT {new Date().getFullYear()}</p>
        </div>
        <div>
          <h3 className="fw-600 mb-20">Admission</h3>
          <p>B.Tech</p>
          <p>B.E</p>
          <p>B.Sc</p>
          <p>MBBS</p>
          <p>B.Com</p>
          <p>BBA</p>
          <p>B.A</p>
        </div>
        <div>
          <h3 className="fw-600 mb-20">Top Jobs</h3>
          <p>Software Developer</p>
          <p>Data science</p>
          <p>Chartered accountant</p>
          <p>Investment banking</p>
          <p>Product Management</p>
          <p>Machine learning</p>
          <p>Marketing management</p>
        </div>
        <div>
          <h3 className="fw-600">Company</h3>
          <p>
            <Link href="/">University</Link>
          </p>
          <p>
            <Link href="/contact">Contact Us</Link>
          </p>
          <p>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
          <p>
            <Link href="/">Careers</Link>
          </p>
          <p>
            <Link href="/aboard">Why Aboard Education?</Link>
          </p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "90%" }} />
      </div>
      <div className="Footer-section2">
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
      <div className="mt-20 Footer-section3">
        <p className="mr-30" style={{ display: "flex", alignItems: "center" }}>
          <a href="tel:9677869617">
            <span className="mr-10">
              <Image
                src="/images/call.png"
                width={20}
                height={20}
                alt="collegetsa-call"
              />
            </span>
            <span className="call-text">+91 9677869617</span>
          </a>
        </p>
        <p style={{ display: "flex", alignItems: "center" }}>
          <a href="mailto:collegetsainfo@gmail.com">
            <span className="mr-10">
              <Image
                src="/images/mail.svg"
                width={20}
                height={20}
                alt="collegetsa-email"
              />
            </span>
            <span className="call-text">collegetsainfo@gmail.com</span>
          </a>
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <hr style={{ width: "90%" }} />
      </div>
      <p className="text-center mt-20">
        Copyright © {new Date().getFullYear()} collegetsa.com
      </p>
    </footer>
  );
}
