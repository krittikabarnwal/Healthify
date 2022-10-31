import React from "react";
import { HashRouter as NavLink } from "react-router-dom";
import SignUpForm from "./SignUpForm";
import "./index.css";

export const SignUpStudent = () => {
  return (
    <div className="d-flex">
      <div className="appAside studentcolor">
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
            className="pageSwitcherItem"
          >
            Sign In
          </NavLink>
          <NavLink
            exact
            to="/student"
            activeClassName="pageSwitcherItem-active"
            className="pageSwitcherItem pageSwitcherItemactiveSignUp"
          >
            Sign Up
          </NavLink>
        </div>
        <div className="formTitle">
          <NavLink
            to="/student/sign-in"
            activeClassName="formTitleLink-active"
            className="formTitleLink "
          >
            Sign In
          </NavLink>{" "}
          or{" "}
          <NavLink
            exact
            to="/student"
            activeClassName="formTitleLink-active"
            className="formTitleLink formTitleLink-active"
          >
            Sign Up
          </NavLink>
        </div>
        <SignUpForm />
        {/* <SignUpForm /> */}
        {/* <Route exact path="/doctor" component={SignUpForm} />
        <Route path="/doctor/sign-in" component={SignInForm} /> */}
      </div>
    </div>
  );
};
