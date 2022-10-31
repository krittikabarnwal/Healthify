import React, { Component } from "react";
import { HashRouter as NavLink } from "react-router-dom";
import { SignInForm } from "./SignInForm";
import "./index.css";

export const SignIn = () => {
  return (
    <div className="d-flex">
      <div className="appAside doctorcolor">
        <div className="heading text-white">
          <div>Doctor</div>
          <div>Login</div>
        </div>
      </div>
      <div className="appForm">
        <div className="pageSwitcher">
          {/* <div></div> */}
          <NavLink
            to="/doctor/sign-in"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem pageSwitcherItemactiveSignIn doctorcolor"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/doctor"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="formTitle">
          <NavLink
            to="/doctor/sign-in"
            activeClassName="formTitleLink-active"
            className="formTitleLink formTitleLink-active"
          >
            Sign In
          </NavLink>{" "}
          or{" "}
          <NavLink
            exact
            to="/doctor"
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
