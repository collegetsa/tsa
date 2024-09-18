"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { setAuth } from "../redux/AppSlice";
import toast, { Toaster } from "react-hot-toast";
import { useCookies } from "next-client-cookies";

function Header() {
  const cookies = useCookies();
  const disPatch = useDispatch();
  const auth = useSelector((state) => state.app.auth);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const jwtToken = cookies.get("jwtToken");
     if (jwtToken) {
       const decoded = jwtDecode(jwtToken);
       disPatch(setAuth(decoded));
     }
  }, []);
  
  return (
    <React.Fragment>
      <Toaster />
      <nav className="navbar">
        <div className="container">
          <Link href="/">
            <div className="logo-group">
              <Image
                src="/images/logo.png"
                width={40}
                height={40}
                alt="CollegeTSA"
              />
              <span className="logo-text ml-10">COLLEGE TSA</span>
            </div>
          </Link>
          {!showNavbar ? (
            <Image
              src="/images/menu.png"
              width={30}
              height={30}
              alt=""
              className="menu-icon"
              onClick={() => setShowNavbar(!showNavbar)}
            />
          ) : (
            <Image
              src="/images/close.png"
              width={30}
              height={30}
              alt=""
              className="menu-icon"
              onClick={() => setShowNavbar(!showNavbar)}
            />
          )}
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li onClick={() => setShowNavbar(false)}>
                <Link href="/">Home</Link>
              </li>
              <li onClick={() => setShowNavbar(false)}>
                <Link href="/college">Colleges</Link>
              </li>
              {/* <li>
                <div className="did-floating-label-content mb-0">
                  <select className="did-floating-select" name="interest">
                    <option value="Engineering">Engineering</option>
                    <option value="Arts &amp; Science">
                      Arts &amp; Science
                    </option>
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
                </div>
              </li> */}
              <li onClick={() => setShowNavbar(false)}>Updates</li>
              <li onClick={() => setShowNavbar(false)}>Exams</li>
              <li onClick={() => setShowNavbar(false)}>
                <Link href="/aboard">Aboard</Link>
              </li>
              {auth?.email ? (
                <React.Fragment>
                  <li className="dropdown">
                    <div className="dropdown-arrow">
                      <span>
                        <Image
                          src="/images/profile.png"
                          width={30}
                          height={30}
                          alt=""
                          className="cursor-pointer dropbtn"
                        />
                      </span>
                      <span>
                        <Image
                          src="/images/drop-down-arrow.png"
                          width={20}
                          height={20}
                          alt=""
                          className="cursor-pointer dropbtn arrow"
                        />
                      </span>
                    </div>
                    <div className="dropdown-content">
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className="cursor-pointer mb-20"
                        onClick={() => setShowNavbar(false)}>
                        <span>
                          <Image
                            src="/images/user.png"
                            width={20}
                            height={20}
                            alt=""
                            className="mr-10"
                          />
                        </span>
                        <span>Hi, {auth?.userName}</span>
                      </div>
                      {auth?.email === "collegetsainfo@gmail.com" && (
                        <React.Fragment>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className="cursor-pointer mb-20"
                            onClick={() => setShowNavbar(false)}>
                            <Link href="/admin/free-counsling-list">
                              <span>
                                <Image
                                  src="/images/freecounsling.png"
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="mr-10"
                                />
                              </span>
                              <span>FreeCounsling</span>
                            </Link>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className="cursor-pointer mb-20"
                            onClick={() => setShowNavbar(false)}>
                            <Link href="/admin/admission-list">
                              <span>
                                <Image
                                  src="/images/admission.png"
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="mr-10"
                                />
                              </span>
                              <span>Admission</span>
                            </Link>
                          </div>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                            className="cursor-pointer mb-20"
                            onClick={() => setShowNavbar(false)}>
                            <Link href="/admin/college/create">
                              <span>
                                <Image
                                  src="/images/add.png"
                                  width={20}
                                  height={20}
                                  alt=""
                                  className="mr-10"
                                />
                              </span>
                              <span>Create College</span>
                            </Link>
                          </div>
                        </React.Fragment>
                      )}
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className="cursor-pointer"
                        onClick={() => {
                          cookies.remove("jwtToken");
                          window.location.reload();
                          setShowNavbar(false);
                        }}>
                        <span>
                          <Image
                            src="/images/signOut.png"
                            width={25}
                            height={25}
                            alt=""
                            className="mr-5"
                          />
                        </span>
                        <span>SignOut</span>
                      </div>
                    </div>
                  </li>
                </React.Fragment>
              ) : (
                <li onClick={() => setShowNavbar(false)}>
                  <Link href="/login">
                    <Image
                      src="/images/signIn.png"
                      width={25}
                      height={25}
                      alt=""
                    />
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <Form />
    </React.Fragment>
  );
}

export default Header;