import React from "react";
import { PharmacyHeader } from "./header";
import { PharmacyRecords } from "./PharmacyRecord";

export const PharmacyDashboard = () => {
  return (
    <div>
      <PharmacyHeader />
      <PharmacyRecords />
    </div>
  );
};
