import "../Styles/Navbar.css";

import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { Menu, X, UserRound, PanelBottomClose } from "lucide-react";
import { useAppDispatch } from "../Redux/store";
import { LogOut } from "../Redux/AuthReducer/action";

export const AdminNavbar = () => {
  const location = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(true);
  const dispatch = useAppDispatch();

  // Toggle Navbar Open
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Active Navbar Link Style
  const activeStyle = {
    color: "#ff6347",
  };

  // logout admin
  function handleLogout() {
    LogOut(dispatch);
  }

  return (
    <div className={`navbar ${isNavOpen ? "" : "open"}`}>
      <Link
        to="/admin-dashboard"
        replace
        state={{ redirectTo: location.pathname }}
      >
        <div className="logo">
          <img
            src="https://i.mscwlns.co/media/misc/others/mm%20logo%20gif%202%20%281%29_2cf9r9.gif?tr=w-400"
            alt="logo"
            width="100%"
            height="100%"
          />
        </div>
      </Link>

      <div className={`nav-links ${isNavOpen ? "" : "open"}`}>
        <NavLink
          to={"/admin"}
          style={({ isActive }) => (isActive ? activeStyle : {})}
          replace
          state={{ redirectTo: location.pathname }}
        >
          <div
            className="nav-link"
            onClick={() => setIsNavOpen(true)}
            style={{ display: "flex", gap: "2px", alignItems: "center" }}
          >
            <UserRound size={22} strokeWidth={1.1} />
            <span className="nav-link" style={{ color: "" }}>
              Admins
            </span>
          </div>
        </NavLink>
        <NavLink
          to="/admin-users"
          style={({ isActive }) => (isActive ? activeStyle : {})}
          replace
          state={{ redirectTo: location.pathname }}
        >
          <div
            className="nav-link"
            onClick={() => setIsNavOpen(true)}
            style={{ display: "flex", gap: "2px", alignItems: "center" }}
          >
            <UserRound size={22} strokeWidth={1.1} />
            <span>All Users</span>
          </div>
        </NavLink>
        <NavLink
          to="/admin-addnewitem"
          style={({ isActive }) => (isActive ? activeStyle : {})}
          replace
          state={{ redirectTo: location.pathname }}
        >
          <div
            className="nav-link"
            onClick={() => setIsNavOpen(true)}
            style={{ display: "flex", gap: "2px", alignItems: "center" }}
          >
            <PanelBottomClose size={21} strokeWidth={1.1} />
            <span>Add New Item</span>
          </div>
        </NavLink>

        <NavLink
          to="/admin-manageitems"
          style={({ isActive }) => (isActive ? activeStyle : {})}
          replace
          state={{ redirectTo: location.pathname }}
        >
          <div
            className="nav-link"
            onClick={() => setIsNavOpen(true)}
            style={{ display: "flex", gap: "2px", alignItems: "center" }}
          >
            <PanelBottomClose size={22} strokeWidth={1.1} />
            <span>Manage Items</span>
          </div>
        </NavLink>
      </div>

      <Box>
        <Button variant="ghost" colorScheme="red" onClick={handleLogout}>
          Log out
        </Button>
      </Box>
      <div className="burger-menu" onClick={toggleNav}>
        {isNavOpen ? <Menu /> : <X />}
      </div>
    </div>
  );
};
