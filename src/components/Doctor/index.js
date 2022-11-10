import React from "react";
import { DoctorHeader } from "./header";
import { Prescriptions } from "./Prescriptions";

export const DoctorDashboard = (user) => {
  return (
    <div>
      <DoctorHeader user={user} />
      <Prescriptions user={user} />
    </div>
  );
};
