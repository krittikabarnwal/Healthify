import React, { Component, useState } from "react";
import "./index.css";

export const UserAuth = () => {
  const color = () => {
    if (role === "Doctor") return "doctorcolor";
    if (role === "Patient") return "patientcolor";
    if (role === "Pharmacy") return "pharmacycolor";
  };
  const [role, setrole] = useState("Doctor");
  const [formType, setformType] = useState("SignIn");

  return (
    <div className="d-flex">
      <div className={`appAside ${color()}`}>
        <div className="pageSwitcher my-3 me-5">
          <div>
            <button
              className={`formTitleButton formTitleField   ${
                role === "Doctor" ? "bg-black" : color()
              }`}
              onClick={() => setrole("Doctor")}
            >
              Doctor
            </button>
            <button
              className={`formTitleButton formTitleField   ${
                role === "Patient" ? "bg-black" : color()
              }`}
              onClick={() => setrole("Patient")}
            >
              Patient
            </button>
            <button
              className={`formTitleButton formTitleField   ${
                role === "Pharmacy" ? "bg-black" : color()
              }`}
              onClick={() => setrole("Pharmacy")}
            >
              Pharmacy
            </button>
          </div>
        </div>
        <div className="heading text-white">
          <div>{role}</div>
          <div>Login</div>
        </div>
      </div>
      <div className="appForm">
        <div className={`pageSwitcher `}>
          <div
            className={`pageSwitcherItem ${
              formType === "SignIn" ? color() : ""
            }`}
            onClick={() => setformType("SignIn")}
            style={{ cursor: "pointer" }}
          >
            Sign In
          </div>
          <div
            className={`pageSwitcherItem ${
              formType === "SignUp" ? color() : ""
            }`}
            onClick={() => setformType("SignUp")}
            style={{ cursor: "pointer" }}
          >
            Sign Up
          </div>
        </div>
        <div className="formTitle">
          <div
            className={`formTitleLink ${
              formType === "SignIn" ? "formTitleLink-active" : ""
            }`}
            onClick={() => setformType("SignIn")}
            style={{ cursor: "pointer" }}
          >
            Sign In
          </div>
          <div
            className={`formTitleLink ${
              formType === "SignUp" ? "formTitleLink-active" : ""
            }`}
            onClick={() => setformType("SignUp")}
            style={{ cursor: "pointer" }}
          >
            Sign Up
          </div>
        </div>
        {formType === "SignIn" ? (
          <div className="formCenter">
            <form className="formFields">
              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  User Name
                </label>
                <input
                  type="text"
                  id="id"
                  className="formFieldInput"
                  placeholder="Enter your User Name"
                  name="id"
                />
              </div>

              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                />
              </div>

              <div className="formField">
                <button className={`formFieldButton ${color()}`}>
                  Sign In
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="formCenter">
            <form className="formFields">
              <div className="formField">
                <label className="formFieldLabel" htmlFor="name">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="formFieldInput"
                  placeholder="Enter your full name"
                  name="name"
                />
              </div>
              {role === "Doctor" && (
                <div className="formField">
                  <label className="formFieldLabel" htmlFor="email">
                    Speciality
                  </label>
                  <input
                    type="text"
                    id="Speciality"
                    className="formFieldInput"
                    placeholder="Enter your Speciality"
                    name="Speciality"
                  />
                </div>
              )}
              {role === "Patient" && (
                <div className="formField">
                  <label className="formFieldLabel">
                    Admission No./ Employee Id
                  </label>
                  <input
                    type="text"
                    id="Speciality"
                    className="formFieldInput"
                    placeholder="Enter Admission No./ Employee Id"
                    name="uniqueId"
                  />
                </div>
              )}
              {role === "Patient" && (
                <div className="formField">
                  <label className="formFieldLabel">Gender</label>
                  <input
                    type="text"
                    id="Gender"
                    className="formFieldInput"
                    placeholder="Male/ Female/ Others"
                    name="gender"
                  />
                </div>
              )}
              {role === "Patient" && (
                <div className="formField">
                  <label className="formFieldLabel">Date of Birth</label>
                  <input
                    type="date"
                    id="DateOFBirth"
                    className="formFieldInput"
                    placeholder="Enter your date of birth"
                    name="dateOfBirth"
                  />
                </div>
              )}

              <div className="formField">
                <label className="formFieldLabel" htmlFor="email">
                  E-Mail Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="formFieldInput"
                  placeholder="Enter your email"
                  name="email"
                />
              </div>
              <div className="formField">
                <label className="formFieldLabel" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="formFieldInput"
                  placeholder="Enter your password"
                  name="password"
                />
              </div>

              <div className="formField">
                <button className={`formFieldButton ${color()}`}>
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};