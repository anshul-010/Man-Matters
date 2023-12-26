import "./App.css";

import { AllRoutes } from "./AllRoutes/AllRoutes";
import Navbar from "./Componants/Navebar";
import { Footer } from "./Componants/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname != "/checkout" && <Navbar />}
      <AllRoutes />
      {location.pathname != "/checkout" && <Footer />}
    </>
  );
}

export default App;
