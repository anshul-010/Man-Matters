import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { AllProduct } from "../Pages/AllProduct";
import { ScheduleAppoinment } from "../Pages/ScheduleAppoinment";
import { Appoinment } from "../Pages/Appoinment";
import { SelfAssessment } from "../Pages/SelfAssessment";
import { Login } from "../Pages/Login";
import { Signup } from "../Pages/Signup";
import { ForgotPassword } from "../Pages/ForgotPassword";
import { ResetPassword } from "../Pages/ResetPassword";
import { ProductCard } from "../Componants/ProductCard";
import PageNotFound from "../Pages/PageNotFound";
import Checkout from "../Pages/Checkout";
import { Profile } from "../Pages/Profile";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/all-products" element={<AllProduct />} />
      <Route path="/product-detail/:id" element={<ProductCard />} />
      <Route path="/schedule-appoinment" element={<ScheduleAppoinment />} />
      <Route path="/appoinment/:title" element={<Appoinment />} />
      <Route path="/self-assessment" element={<SelfAssessment />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
