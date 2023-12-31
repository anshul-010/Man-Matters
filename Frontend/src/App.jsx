import "./App.css";
import Navbar from "./Componants/Navebar";
import CheckoutNavbar from "./Componants/CheckoutNavbar";
import Footer from "./Componants/Footer";
import { Home } from "./Pages/Home";
import { AllProduct } from "./Pages/AllProduct";
import { ScheduleAppoinment } from "./Pages/ScheduleAppoinment";
import { Appoinment } from "./Pages/Appoinment";
import { SelfAssessment } from "./Pages/SelfAssessment";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { ForgotPassword } from "./Pages/ForgotPassword";
import { ResetPassword } from "./Pages/ResetPassword";
import { ProductCard } from "./Componants/ProductCard";
import { Profile } from "./Pages/Profile";
import Checkout from "./Pages/Checkout";
import PageNotFound from "./Pages/PageNotFound";

import { useLocation, Routes, Route } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname == "/checkout" ? <CheckoutNavbar /> : <Navbar />}

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

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      {location.pathname != "/checkout" && <Footer />}
    </>
  );
}

export default App;
