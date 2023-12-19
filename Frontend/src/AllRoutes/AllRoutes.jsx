import React from "react";
import { Routes, Route, Link, Router } from "react-router-dom";
import { Home } from "../Pages/Home";
import { AllProduct } from "../Pages/AllProduct";
import { ScheduleAppoinment } from "../Pages/ScheduleAppoinment";
import { Appoinment } from "../Pages/Appoinment";
import { SelfAssessment } from "../Pages/SelfAssessment";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { ForgotPassword } from "../Pages/ForgotPassword";
import { ResetPassword } from "../Pages/ResetPassword";
import PageNotFound from "../Pages/PageNotFound";
import Checkout from "../Pages/Checkout";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/all-products" element={<AllProduct />} />
      <Route path="/schedule-appoinment" element={<ScheduleAppoinment />} />
      <Route path="/appoinment/:title" element={<Appoinment />} />
      <Route path="/self-assessment" element={<SelfAssessment />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
