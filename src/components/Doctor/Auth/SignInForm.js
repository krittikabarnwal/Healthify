import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "./../../firebase-config";

export const SignInForm = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({});

  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  const login = () => {
    // try {
    //   const user = await signInWithEmailAndPassword(
    //     auth,
    //     loginEmail,
    //     loginPassword
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
      <form className="formFields" onSubmit={this.handleSubmit}>
        <div className="formField">
          <label className="formFieldLabel" htmlFor="email">
            Email Id
          </label>
          <input
            type="text"
            id="id"
            className="formFieldInput"
            placeholder="Enter your User Name"
            name="id"
            onChange={(event) => {
              setLoginEmail(event.target.value);
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
              setLoginPassword(event.target.value);
            }}
          />
        </div>

        <div className="formField">
          <button
            className="formFieldButton"
            // onClick={login}
          >
            Sign In
          </button>{" "}
        </div>
      </form>
    </div>
  );
};
