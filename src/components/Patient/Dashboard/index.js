import React from "react";
import { PatientRecords } from "./PatientRecord";
import { StudentHeader } from "./header";
export const StudentDashboard = () => {
  return (
    <div>
      <StudentHeader />
      <PatientRecords />
    </div>
  );
};
