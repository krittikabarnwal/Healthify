import React from "react";
import { DoctorHeader } from "./header";
import { Prescriptions } from "./Prescriptions";

export const DoctorDashboard = () => {
  return (
    <div>
      <DoctorHeader />
      <Prescriptions />
    </div>
  );
};
