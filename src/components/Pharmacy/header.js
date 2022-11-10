import React from "react";
import { LogoutUser } from "../Auth/logout";

import "./index.css";

export const PharmacyHeader = (user) => {
  return (
    <div className="DoctorNavbar d-flex justify-content-between border-bottom pharmacycolor text-white">
      <div className="NavLogo d-flex my-2">
        <img className="ms-3" src={"/images/pharmacyicon.jpg"} width="80px" />

        <div className="headingNav mt-2 mx-3">Pharmacy</div>
      </div>

      <div className="d-flex ">
        <div className="verticalLine mt-3"></div>

        <div className="d-flex mt-2">
          <div className="UserName mx-3 mt-2">
            {user ? user.user.user.displayName : ""}
          </div>
          <LogoutUser />
        </div>
      </div>
    </div>
  );
};
