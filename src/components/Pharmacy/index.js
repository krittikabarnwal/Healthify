import React from "react";
import { PharmacyHeader } from "./header";
import { PharmacyRecords } from "./PharmacyRecord";

export const PharmacyDashboard = (user) => {
  return (
    <div>
      <PharmacyHeader user={user} />
      <PharmacyRecords user={user} />
    </div>
  );
};
