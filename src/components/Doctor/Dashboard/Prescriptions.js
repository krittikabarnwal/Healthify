import React from "react";

export const Prescriptions = () => {
  return (
    <div className="PrescriptionDiv">
      <div className="Prescription border">
        <div className="row">
          <div className="p-3 col-3">
            <div className="Prescriptionheading d-flex ">
              Name:
              <div className="Prescriptionsubtext ms-4">Krittika Barnwal</div>
            </div>
            <div className="Prescriptionheading d-flex ">
              Unique ID:
              <div className="Prescriptionsubtext ms-2">19JE0453</div>
            </div>
            <div className="Prescriptionheading d-flex ">
              Date:
              <div className="Prescriptionsubtext ms-4">10/11/2022</div>
            </div>
          </div>
          <div className="p-3 col-3">
            <div className="Prescriptionheading ">
              Symptoms:
              <span className="Prescriptionsubtext ms-4">
                Equal-width columns can be broken into multiple lines, but there
                was a Safari
              </span>
            </div>
          </div>
          <div className="p-3 col">
            <div className="Prescriptionheading ">
              Diagnosis:
              <span className="Prescriptionsubtext ms-4">
                Equal-width columns can be broken into multiple lines, but there
                was a Safari flexbox
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
