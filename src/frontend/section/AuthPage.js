"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/AppSlice";
import { jwtDecode } from "jwt-decode";
import toast, { Toaster } from "react-hot-toast"; 
import { useCookies } from "next-client-cookies";

const AuthPage = ({ authType }) => {
  const cookies = useCookies();
  const disPatch = useDispatch()
  const router = useRouter();
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleChange = (e) => {
    setUserData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const alreadyExist = () => toast.error("User already exist");
  const accountCreated = () => toast.success("Registered Successfully");
  const loginSuccessfull = () => toast.success("Login Successfully");
  const invalidCredentials = () => toast.error("Invalid Credentials");

  const testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const testPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValidEmail = testEmail.test(userData.email);
  const isStrongPassword = testPassword.test(userData.password);
  const WeekPassword = !isStrongPassword && userData.password.length > 1;

  const register = async () => {
    if (isValidEmail && isStrongPassword) {
      const response = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        setUserData({
          userName: "",
          email: "",
          password: "",
        });
        accountCreated();
        router.push("/login");
      }
      if (!response.ok) {
        alreadyExist();
        router.refresh();
      }
    }
  };

  const login = async () => {
    const response = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      cookies.set("jwtToken", data.token);
      const decoded = jwtDecode(data.token);
      disPatch(setAuth(decoded));
      setUserData({
        userName: "",
        email: "",
        password: "",
      });
      loginSuccessfull();
    } else {
      invalidCredentials();
    }
  };

  return (
    <div className="auth-page mt-30 mb-30">
      <div className="auth-group">
        <h2 className="text-center mb-40">
          {authType === "login"
            ? "Log in to your account"
            : "Create New Acoount"}
        </h2>
        {authType === "register" && (
          <div className="did-floating-label-content">
            <input
              placeholder=""
              value={userData.userName}
              name="userName"
              type="text"
              onChange={handleChange}
              className="did-floating-input"
            />
            <label className="did-floating-label input-user">UserName*</label>
          </div>
        )}
        <div className="did-floating-label-content">
          <input
            placeholder=""
            value={userData.email}
            name="email"
            type="email"
            onChange={handleChange}
            className="did-floating-input"
          />
          <label className="did-floating-label input-email">Email*</label>
        </div>
        <div className="did-floating-label-content">
          <input
            placeholder=""
            value={userData.password}
            name="password"
            type={isShowPassword ? "text" : "password"}
            onChange={handleChange}
            className="did-floating-input"
          />
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="mt-10">
            <input
              type="checkbox"
              onClick={() => setIsShowPassword(!isShowPassword)}
            />
            <spa>Show Password</spa>
          </div>
          <label className="did-floating-label input-password">Password*</label>
        </div>

        {WeekPassword && authType === "register" && (
          <React.Fragment>
            <span>Password must contain the following:</span>
            <ul>
              <li>1 capital letter [A, B, C]</li>
              <li>1 small letter [a, b, c]</li>
              <li>1 number [1, 2, 3]</li>
              <li>1 special character [@, $, #]</li>
              <li>Minimum length 8 character</li>
            </ul>
          </React.Fragment>
        )}
        {authType === "login" && (
          <React.Fragment>
            <button onClick={login} className="btn auth-btn">
              Login
            </button>
            <p>
              Don’t have an Account? <Link href="/register">Register Now!</Link>
            </p>
          </React.Fragment>
        )}
        {authType === "register" && (
          <React.Fragment>
            <button onClick={register} className="btn auth-btn">
              Register
            </button>
            <p>
              Already have an account? <Link href="/login">Login Now!</Link>
            </p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
