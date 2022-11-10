import React from "react";
import { PatientRecords } from "./PatientRecord";
import { StudentHeader } from "./header";
export const StudentDashboard = (user) => {
  return (
    <div>
      <StudentHeader user={user} />
      <PatientRecords user={user} />
    </div>
  );
};
