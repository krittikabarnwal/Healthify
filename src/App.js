import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import { SignIn } from "./components/Doctor/Auth/SignIn";
import { SignUp } from "./components/Doctor/Auth/SignUp";
import { SignInStudent } from "./components/Student/Auth/SignIn";
import { SignUpStudent } from "./components/Student/Auth/SignUp";
import { DoctorDashboard } from "./components/Doctor/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doctor" element={<SignUp />} />
        <Route path="/doctor/sign-in" element={<SignIn />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/student" element={<SignUpStudent />} />
        <Route path="/student/sign-in" element={<SignInStudent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
