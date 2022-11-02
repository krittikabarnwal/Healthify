import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DoctorDashboard } from "./components/Doctor/Dashboard";
import { UserAuth } from "./components/Auth/UserAuth";
import { StudentDashboard } from "./components/Patient/Dashboard";
import { PharmacyDashboard } from "./components/Pharmacy/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserAuth />} />
        <Route path="/doctor" element={<DoctorDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/pharmacy" element={<PharmacyDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
