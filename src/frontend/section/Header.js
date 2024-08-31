"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "./Form";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { setAuth } from "../redux/AppSlice";
import toast, { Toaster } from "react-hot-toast"; 

function Header() {
  const disPatch = useDispatch();
  const router = useRouter();
  const auth = useSelector((state) => state.app.auth);
  const [showNavbar, setShowNavbar] = useState(false);

  const logOut = () => toast.success("LogOut Successfully");

   useEffect(() => {
     const token = localStorage.getItem("token");
     if (token) {
       const decoded = jwtDecode(token);
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
              {auth?.email === "collegetsainfo@gmail.com" && (
                <li onClick={() => setShowNavbar(false)}>
                  <Link href="/admin">Admin</Link>
                </li>
              )}
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
                        className="cursor-pointer mb-15"
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
                        <span>{auth?.userName}</span>
                      </div>
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        className="cursor-pointer"
                        onClick={() => {
                          localStorage.clear("token");
                          // router.refresh();
                          window.location.reload();
                          setShowNavbar(false);
                          // logOut()
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
