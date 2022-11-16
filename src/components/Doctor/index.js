import React, { useState } from "react";
import { DoctorHeader } from "./header";
import { Prescriptions } from "./Prescriptions";

export const DoctorDashboard = (user) => {
  const [patIdSearch, setPatIdSearch] = useState("");
  const handlePS = (searchpat) => {
    setPatIdSearch(searchpat);
    console.log(patIdSearch);
  };
  return (
    <div>
      <DoctorHeader user={user} handlepatientsearch={handlePS} />
      <Prescriptions user={user} />
    </div>
  );
};
