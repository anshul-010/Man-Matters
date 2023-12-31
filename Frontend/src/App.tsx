import "./App.css";
import CheckoutNavbar from "./Components/CheckoutNavbar";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PageNotFound from "./Routes/PageNotFound";
import Checkout from "./Routes/Checkout";
import { Profile } from "./Routes/Profile";
import { SelfAssessment } from "./Routes/SelfAssessment";
import { Appoinment } from "./Routes/Appoinment";
import { ScheduleAppoinment } from "./Routes/ScheduleAppoinment";
import { ProductCard } from "./Components/ProductCard";
import { AllProduct } from "./Routes/AllProducts";
import { ResetPassword } from "./Routes/ResetPassword";
import { ForgotPassword } from "./Routes/ForgotPassword";
import { Signup } from "./Routes/Signup";
import { Login } from "./Routes/Login";
import { Home } from "./Routes/Home";

import { Box } from "@chakra-ui/react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AdminDashboard } from "./Routes/AdminDashboard";
import { AdminNavbar } from "./Components/AdminNavbar";

function App() {
  const location = useLocation();
  const hideFooter = location.pathname === "/admin-dashboard" || location.pathname === "/checkout";
  const useAdminNavbar = location.pathname === "/admin-dashboard";
  const useCheckoutNavbar = location.pathname === "/checkout";
  return (
    <Box className="App">
        {useCheckoutNavbar ? <CheckoutNavbar /> : (useAdminNavbar ? <AdminNavbar /> : <Navbar />)}


      {/* All Routes */}
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
        <Route path="/admin-dashboard" element={<AdminDashboard/>} />
        <Route path="*" element={<PageNotFound />} />/
      </Routes>

      {!hideFooter && <Footer />}
    </Box>
  );
}

export default App;
