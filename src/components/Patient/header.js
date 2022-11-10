import React, { useState } from "react";
import { LogoutUser } from "../Auth/logout";

import "./index.css";

export const StudentHeader = (user) => {
  return (
    <div className="DoctorNavbar d-flex justify-content-between border-bottom patientcolor text-white">
      <div className="NavLogo d-flex my-2">
        <img className="ms-3" src={"/images/patienticon.jpg"} width="80px" />

        <div className="headingNav mt-2 mx-3">Patient</div>
      </div>

      <div className="d-flex ">
        <div className="verticalLine mt-3"></div>

        <div className="d-flex">
          <div className="UserName mx-3 mt-3">
            {user ? user.user.user.displayName : ""}
          </div>
          <LogoutUser />
        </div>
      </div>
    </div>
  );
};
