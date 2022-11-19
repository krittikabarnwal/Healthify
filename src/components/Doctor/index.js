import React, { useState } from "react";
import { DoctorHeader } from "./header";
import { Prescriptions } from "./Prescriptions";

export const DoctorDashboard = (user) => {
  const [patIdSearch, setPatIdSearch] = useState("");
  const [dosearch, setDosearch] = useState(false);
  console.log(patIdSearch);
  return (
    <div>
      <DoctorHeader
        user={user}
        patIdSearch={patIdSearch}
        setPatIdSearch={setPatIdSearch}
        setDosearch={setDosearch}
      />
      <Prescriptions
        user={user}
        patIdSearch={patIdSearch}
        dosearch={dosearch}
      />
    </div>
  );
};
