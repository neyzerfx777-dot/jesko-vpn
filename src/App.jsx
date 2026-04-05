import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ContinueEmail from "./pages/EmailScreen";
import PhoneScreen from "./pages/PhoneScreen";
import PasswordScreen from "./pages/PasswordScreen";
import PasswordScreenPhone from "./pages/PasswordScreenPhone";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="continue-with-email" element={<ContinueEmail />} />
        <Route path="continue-with-phone" element={<PhoneScreen />} />
        <Route path="password-screen-email" element={<PasswordScreen />} />
        <Route path="password-screen-phone" element={<PasswordScreenPhone />} />
      </Route>
    </Routes>
  );
}

export default App;
