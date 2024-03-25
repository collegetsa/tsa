"use client";
import Image from "next/image";
import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { isForm } from "@/redux/FormSlice";
import Link from "next/link";
import Form from "./Form";

export default function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isMegaMenu, setIsMegaMenu] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const disPatch = useDispatch();

  const modalIsOpen = useSelector((state: any) => state.form.value);
  const closeModal = useSelector((state: any) => state.form.value);

  const megaMenu = () => {
    setIsMegaMenu(!isMegaMenu);
  };

  if (isMegaMenu === true) {
    setTimeout(() => {
      setIsMegaMenu(false);
    }, 10000);
  }

  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="container">
          <Link href="/">
            <Image
              src="/image/tsa-logo.png"
              alt="collegetsa"
              width={40}
              height={40}
              quality={100}
            />
          </Link>
          <input
            // value={_search}
            className="search"
            placeholder="Search . . ."
            // onChange={handleChange}
          />
          <div className="menu-icon">
            <Image
              src={showNavbar ? "/image/close.svg" : "/image/hamburger.svg"}
              alt="hamburger"
              width={25}
              height={25}
              quality={100}
              onClick={handleShowNavbar}
            />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul className="mb-0">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a className="cursor-pointer" onClick={megaMenu}>
                  Updates
                </a>
                {isMegaMenu && (
                  <div className="mega-menu">
                    <div>
                      <p className="fw-600 mb-15">LATEST UPDATES</p>
                      <p>Admission 2024</p>
                      <p>Top University in 2024</p>
                      <p>Top Courses in 2024</p>
                      <p>Top Jobs in 2024</p>
                      <p>Top Colleges in 2024</p>
                      <p>Free Counsling</p>
                    </div>
                    <div>
                      <p className="fw-600 mb-15">TOP EXAMS</p>
                      <p>JEE Main 2024</p>
                      <p>NEET 2024</p>
                      <p>Gate 2024</p>
                      <p>CAT 2024</p>
                      <p>CMAT 2024</p>
                      <p>CLAT 2024</p>
                    </div>
                    <div>
                      <p className="fw-600 mb-15">Admission 2024</p>
                      <p>B.Tech</p>
                      <p>B.E</p>
                      <p>B.Sc</p>
                      <p>MBBS</p>
                      <p>B.Com</p>
                      <p>BBA</p>
                      <p>B.A</p>
                    </div>
                    <div>
                      <p className="fw-600 mb-15">ABOARD ADMISSION</p>
                      <p>Medical Colleges</p>
                      <p>Enginnering Colleges</p>
                      <p>Arts & Science Colleges</p>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link href="/university">University</Link>
              </li>
              <li>
                <Link href="/aboard">Aboard</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="form"
      >
        <div className="d-flex justify-content-end">
          <Image
            src="/image/close.png"
            alt="close"
            width={25}
            height={25}
            onClick={() => disPatch(isForm(false))}
            className="cursor-pointer"
          />
        </div>
        <Form />
      </Modal>
    </React.Fragment>
  );
}
