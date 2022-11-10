import React, { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router";
import "./index.css";

export const UserAuth = () => {
  const navigate = useNavigate();
  const color = () => {
    if (role === "Doctor") return "doctorcolor";
    if (role === "Patient") return "patientcolor";
    if (role === "Pharmacy") return "pharmacycolor";
  };
  const [role, setrole] = useState("Doctor");
  const [formType, setformType] = useState("SignIn");

  const [newUser, setnewUser] = useState({
    name: "",
    email: "",
    password: "",
    uniqueId: "",
    speciality: "",
    gender: "",
    dateOfBirth: "",
    role: "",
  });

  const handleInput = (e) => {
    setnewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setnewUser({ ...newUser, role: { role } });
    const { email, password } = newUser;
    if (email && password) {
      try {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (user) {
          alert("Succuessful Login");
          navigate(`${role.toLowerCase()}`);
        }
      } catch (err) {
        console.log(err);
      }
      setnewUser({
        name: "",
        email: "",
        password: "",
        uniqueId: "",
        speciality: "",
        gender: "",
        dateOfBirth: "",
        role: "",
      });
    }
  };
  const handleSignUp = async (e) => {
    e.preventDefault();
    setnewUser({ ...newUser, role: { role } });
    const { name, email, password, uniqueId, speciality, gender, dateOfBirth } =
      newUser;
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (res) => {
          updateProfile(res.user, {
            displayName: name,
          });
        }
      );
      const res = await fetch(
        `https://healthyify-krittika-default-rtdb.asia-southeast1.firebasedatabase.app/${role}.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            uniqueId,
            speciality,
            gender,
            dateOfBirth,
          }),
        }
      );
      if (res) {
        alert("Succuessful Sign up");
        navigate(`${role.toLowerCase()}`);
      }
    } catch (error) {
      console.log("auth error ", error);
    }
    setnewUser({
      name: "",
      email: "",
      password: "",
      uniqueId: "",
      speciality: "",
      gender: "",
      dateOfBirth: "",
      role: "",
    });
  };

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
          <div>{formType === "SignIn" ? "Login" : "Register"}</div>
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
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="formFieldInput"
                  placeholder="Enter your User Name"
                  name="email"
                  value={newUser.email}
                  onChange={(e) => handleInput(e)}
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
                  value={newUser.password}
                  onChange={(e) => handleInput(e)}
                />
              </div>

              <div className="formField">
                <button
                  className={`formFieldButton ${color()}`}
                  onClick={(e) => {
                    handleSignIn(e);
                  }}
                >
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
                  value={newUser.name}
                  onChange={(e) => handleInput(e)}
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
                    name="speciality"
                    value={newUser.speciality}
                    onChange={(e) => handleInput(e)}
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
                    id="uniqueId"
                    className="formFieldInput"
                    placeholder="Enter Admission No./ Employee Id"
                    name="uniqueId"
                    value={newUser.uniqueId}
                    onChange={(e) => handleInput(e)}
                  />
                </div>
              )}
              {role === "Patient" && (
                <div className="formField">
                  <label className="formFieldLabel">Gender</label>
                  <input
                    type="text"
                    id="gender"
                    className="formFieldInput"
                    placeholder="Male/ Female/ Others"
                    name="gender"
                    value={newUser.gender}
                    onChange={(e) => handleInput(e)}
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
                    value={newUser.dateOfBirth}
                    onChange={(e) => handleInput(e)}
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
                  value={newUser.email}
                  onChange={(e) => handleInput(e)}
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
                  value={newUser.password}
                  onChange={(e) => handleInput(e)}
                />
              </div>

              <div className="formField">
                <button
                  className={`formFieldButton ${color()}`}
                  onClick={(e) => {
                    handleSignUp(e);
                  }}
                >
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
