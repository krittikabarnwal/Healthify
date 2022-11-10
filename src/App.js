import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DoctorDashboard } from "./components/Doctor";
import { UserAuth } from "./components/Auth/UserAuth";
import { StudentDashboard } from "./components/Patient";
import { PharmacyDashboard } from "./components/Pharmacy";
import { auth } from "../src/components/firebase";
require("firebase/auth");

function App() {
  const [userLogin, setUserLogin] = useState({});
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserLogin(user);
      } else setUserLogin({});
    });
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserAuth />} />
        <Route path="/doctor" element={<DoctorDashboard user={userLogin} />} />
        <Route
          path="/patient"
          element={<StudentDashboard user={userLogin} />}
        />
        <Route
          path="/pharmacy"
          element={<PharmacyDashboard user={userLogin} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
