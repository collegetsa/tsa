import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="d-flex justify-content-center mt-30 mb-50">
      <div className="center-page">
        <h4 className="fw-700 mb-25">
          T.S.A SERVICES EDUCATIONAL & CAREER GUIDANCE
        </h4>
        <p>
          T.S.A Service Educational and Career Guidance{" "}
          <span className="fw-600">COLLEGE ADMISSION GUIDANCE</span> We are
          established the educational consultancy since 2015.We are the no.1
          educational consultant in TIRUVANNAMALAI, Arani, ambur, hosur,
          chennai, Salem, vellore and dharmapuri. For the past 6 years we are
          admitted more than hundreds of students in various departments like
          medical, engineering, dental, arts and science and law, management,
          information technology, agriculture and research programs. We also
          help the students and job seekers getting placement in various top
          MNC?s in india and abroad. All these services are done free of cost.
          No service charge for students. We admit students with just pass mark
          in +2 exams with very low pakage in various top colleges.
        </p>
        <p>
          Educational counseling / spot admission in various courses/
          placements/ carrier guidance/ entrance coaching in various competitive
          exams/ tution for +2 students.
        </p>

        <div className="d-flex justify-content-center flex-column align-items-center mb-30 mt-30">
          <Image
            src="/image/ceo.webp"
            alt="collegetsa-ceo"
            width={250}
            height={250}
            className="mb-20"
          />
          <h6 className="fw-600">Aravind Thennarasu - CEO of CollegeTSA</h6>
        </div>

        <h6>Our Services include:</h6>

        <ul>
          <li>
            Free Educational Counselling to Students & Parents regarding all
            courses.
          </li>
          <li>We Guide & Prefer recognised & Well known Institutions only.</li>
          <li>
            We have Direct Authorisation of Reputed Colleges & Universities
          </li>
          <li>Seat Reservations Facility</li>
          <li>Free Campus visit</li>
          <li>
            Separate Hostel Facilities for both Boys & Girls with South Indian
            Dishes
          </li>
          <li>Well Qualified & Experienced Faculty Members.</li>
          <li>Career counselling</li>
          <li>Career Mapping.</li>
          <li>Physcometric test.</li>
          <li>Intelligence Test.etc by Expert counsellor.</li>
        </ul>

        <div className="d-flex flex-column mb-25 mt-30">
          <h6 className="fw-600">Main Office Address</h6>
          <span>No. 23, Arcot Road,</span>
          <span>Mangamaram Bus Stop, Arani</span>
          <span>Tiruvannamalai District,</span>
          <span>Tamilnadu 632301, India</span>
        </div>

        <h6 className="fw-600">Office Address: 1</h6>
        <div className="d-flex flex-column mb-25">
          <span>NO. 86/28a-18, Salem Main Road,</span>
          <span>Seeragapadi, Salem 636308</span>
        </div>

        <h6 className="fw-600">Office Address: 2</h6>
        <div className="d-flex flex-column mb-25">
          <span>NO.278 ,Maniya Kollai Street,</span>
          <span>Santhavasal, Polur Taluk</span>
          <span>Tiruvannamalai District,</span>
          <span>Tamilnadu 606905, India</span>
        </div>
        <p>
          <span className="fw-700">Branches:</span> Chennai, Hosur, Dharmapuri,
          Ranipet, Salem
        </p>
        <div className="d-flex gap-4 mb-25">
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
          <a
            href="https://www.youtube.com/@TSASERVICES/featured"
            target="_blank"
          >
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
        <div className="mb-15">
          <a
            href="tel:9677869617"
            className="text-decoration-none mr-30"
            style={{ color: " #000" }}
          >
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
        </div>
        <div>
          <a
            href="mailto:collegetsainfo@gmail.com"
            className="text-decoration-none"
            style={{ color: " #000" }}
          >
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
      </div>
    </div>
  );
}
