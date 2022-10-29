import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import SignInForm from "./SignInForm";
import "./index.css";

export const SignInStudent = () => {
  return (
    <div className="d-flex">
      <div className="appAside">
        <div className="heading text-white">
          <div>Student</div>
          <div>Login</div>
        </div>
      </div>
      <div className="appForm">
        <div className="pageSwitcher">
          {/* <div></div> */}
          <NavLink
            to="/student/sign-in"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem pageSwitcherItemactiveSignIn"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/student"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="formTitle">
          <NavLink
            to="/student/sign-in"
            activeClassName="formTitleLink-active"
            className="formTitleLink formTitleLink-active"
          >
            Sign In
          </NavLink>{" "}
          or{" "}
          <NavLink
            exact
            to="/student"
            activeClassName="formTitleLink-active"
            className="formTitleLink"
          >
            Sign Up
          </NavLink>
        </div>
        <SignInForm />
      </div>
    </div>
  );
};
