import "./App.css";
import CheckoutNavbar from "./Componants/CheckoutNavbar";
import Navbar from "./Componants/Navebar";
import { AllRoutes } from "./AllRoutes/AllRoutes";

import { Footer } from "./Componants/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname == "/checkout" ? <CheckoutNavbar /> : <Navbar />}
      <AllRoutes />
      {location.pathname != "/checkout" && <Footer />}
    </>
  );
}

export default App;
