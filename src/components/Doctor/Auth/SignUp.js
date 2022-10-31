import React from "react";
import { HashRouter as NavLink } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";
import "./index.css";

export const SignUp = () => {
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
          <NavLink
            to="/doctor/sign-in"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/doctor"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem pageSwitcherItemactiveSignUp"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="formTitle">
          <NavLink
            to="/doctor/sign-in"
            activeClassName="formTitleLink-active"
            className="formTitleLink "
          >
            Sign In
          </NavLink>{" "}
          or{" "}
          <NavLink
            exact
            to="/doctor"
            activeClassName="formTitleLink-active"
            className="formTitleLink formTitleLink-active"
          >
            Sign Up
          </NavLink>
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};
