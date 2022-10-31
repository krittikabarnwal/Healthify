import { Link } from "react-router-dom";
import React, { Component, useState } from "react";
// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "./../../firebase-config";

export const SignUpForm = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const register = () => {
    // try {
    //   const user = await createUserWithEmailAndPassword(
    //     auth,
    //     registerEmail,
    //     registerPassword
    //   );
    //   console.log(user);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  const logout = () => {
    // await signOut(auth);
  };

  return (
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
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            Speciality{" "}
          </label>
          <input
            type="text"
            id="Speciality"
            className="formFieldInput"
            placeholder="Enter your Speciality"
            name="Speciality"
          />
        </div>

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
            onChange={(event) => {
              setRegisterEmail(event.target.value);
            }}
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
            onChange={(event) => {
              setRegisterPassword(event.target.value);
            }}
          />
        </div>
        <h4> User Logged In: </h4>
        {user?.email}

        <div className="formField">
          <button
            className="formFieldButton"
            // onClick={register}
          >
            Sign Up
          </button>{" "}
        </div>
      </form>
    </div>
  );
};
