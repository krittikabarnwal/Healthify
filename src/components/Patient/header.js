import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import "./index.css";

export const StudentHeader = () => {
  return (
    <div className="DoctorNavbar d-flex justify-content-between border-bottom patientcolor text-white">
      <div className="NavLogo d-flex my-2">
        <img className="ms-3" src={"/images/patienticon.jpg"} width="80px" />

        <div className="headingNav mt-2 mx-3">Patient</div>
      </div>

      <div className="d-flex ">
        <div className="verticalLine mt-3"></div>

        <div className="d-flex mt-3">
          <div className="UserName mx-3">User Name</div>
          <AccountCircleIcon fontSize="large" sx={{ mx: "5px" }} />
        </div>
      </div>
    </div>
  );
};
