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
import { AdminDashboard } from "./Admin/AdminDashboard";
import { AdminNavbar } from "./Admin/AdminNavbar";
import { Admin } from "./Admin/Admin";
import { AdminUsers } from "./Admin/AdminUsers";
import { AdminAddNewItem } from "./Admin/AdminAddNewItem";
import { AdminManageItems } from "./Admin/AdminManageItems";
import { Private } from "./Components/Private";

function App() {
  const location = useLocation();
  const hideFooter =
  location.pathname === "/checkout";
  const useAdminNavbar =
    location.pathname === "/admin" ||
    location.pathname === "/admin-dashboard" ||
    location.pathname === "/admin-users" ||
    location.pathname === "/admin-addnewitem" ||
    location.pathname === "/admin-manageitems";
  const useCheckoutNavbar = location.pathname === "/checkout";
  return (
    <Box className="App">
      {useCheckoutNavbar ? (
        <CheckoutNavbar />
      ) : useAdminNavbar ? (
        <AdminNavbar />
      ) : (
        <Navbar />
      )}

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
        <Route path="/appoinment/:title" element={<Private><Appoinment /></Private>} />
        <Route path="/self-assessment" element={<SelfAssessment />} />
        <Route path="/profile" element={<Private><Profile /></Private>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/admin-users" element={<AdminUsers/>} />
        <Route path="/admin-addnewitem" element={<AdminAddNewItem/>} />
        <Route path="/admin-manageitems" element={<AdminManageItems/>} />
        <Route path="*" element={<PageNotFound />} />/
      </Routes>

      {!hideFooter && <Footer />}
    </Box>
  );
}

export default App;
