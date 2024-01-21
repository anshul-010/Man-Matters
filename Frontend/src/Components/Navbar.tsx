import "../Styles/Navbar.css";
import { LogOut, GetUserDetails } from "../Redux/AuthReducer/action";
import { GetProducts } from "../Redux/ProductReducer/action";
import { GetCartItems } from "../Redux/CartReducer/action";
import { useAppDispatch, useAppSelector } from "../Redux/store";

import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import {
  Menu,
  X,
  ShoppingCart,
  UserRound,
  Search,
  Home,
  CalendarCheck,
  User,
  PanelBottomClose,
} from "lucide-react";

const Navbar = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // const [token, setToken] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cartItemsLength, setCartItemsLength] = useState(0);

  // const toggleNavbar = useAppSelector(
  //   (store) => store.AuthReducer.toggleNavbar
  // );
  const toggleCart = useAppSelector((store) => store.CartReducer.toggleCart);
  const userName = useAppSelector((store) => store.AuthReducer.name);
  const isAuth = useAppSelector((store) => store.AuthReducer.isAuth);
  // To update no. of items in cart
  useEffect(() => {
    const cartLength = GetCartItems();
    setCartItemsLength(cartLength.length);
  }, [toggleCart]);

  // To set token on user login

  let paramObj = {
    params: {
      category: searchTerm,
    },
  };

  // console.log(token)

  // Toggle Navbar Open
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // LogOut
  const handleLogout = () => {
    LogOut(dispatch);
  };

  // Search Input onChange
  function handleSearch(e: any) {
    setSearchTerm(e.target.value);
  }

  // Redirecting on search input tag click
  function handleRelocate() {
    navigate("/all-products", {
      state: { redirectTo: location.pathname },
      replace: true,
    });
  }

  // Getting product on search term change
  useEffect(() => {
    GetProducts(dispatch, toast, paramObj);
  }, [searchTerm]);

  // Active Navbar Link Style
  const activeStyle = {
    color: "#ff6347",
  };

  return (
    <div className={`navbar ${isNavOpen ? "" : "open"}`}>
      <Link to="/" replace state={{ redirectTo: location.pathname }}>
        <div className="logo">
          <img
            src="https://i.mscwlns.co/media/misc/others/mm%20logo%20gif%202%20%281%29_2cf9r9.gif?tr=w-400"
            alt="logo"
            width="100%"
            height="100%"
          />
        </div>
      </Link>

      <div id="search">
        <span>
          <Search color="#22548A" />
        </span>
        <form>
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onClick={handleRelocate}
            onChange={handleSearch}
          />
        </form>
      </div>

      <div className={`nav-links ${isNavOpen ? "" : "open"}`}>
        <NavLink
          to={"/all-products"}
          style={({ isActive }) => (isActive ? activeStyle : {})}
          replace
          state={{ redirectTo: location.pathname }}
        >
          <div
            className="nav-link"
            onClick={() => setIsNavOpen(true)}
            style={{ display: "flex", gap: "2px" }}
          >
            <Home size={22} strokeWidth={1.1} />
            <span className="nav-link" style={{ color: "" }}>
              All Products
            </span>
          </div>
        </NavLink>
        <NavLink
          to="/schedule-appoinment"
          style={({ isActive }) => (isActive ? activeStyle : {})}
          replace
          state={{ redirectTo: location.pathname }}
        >
          <div
            className="nav-link"
            onClick={() => setIsNavOpen(true)}
            style={{ display: "flex", gap: "2px" }}
          >
            <CalendarCheck size={22} strokeWidth={1.1} />
            <span>Schedule Appointment</span>
          </div>
        </NavLink>
        <NavLink
          to="/self-assessment"
          style={({ isActive }) => (isActive ? activeStyle : {})}
          replace
          state={{ redirectTo: location.pathname }}
        >
          <div
            className="nav-link"
            onClick={() => setIsNavOpen(true)}
            style={{ display: "flex", gap: "2px" }}
          >
            <PanelBottomClose size={22} strokeWidth={1.1} />
            <span>Self Assessment</span>
          </div>
        </NavLink>

        {isAuth ? (
          <div className="user-profile">
            <span className="log-in">
              <UserRound color="#1f5c9d" size={22} />
              {`Hi! ${userName}`}
            </span>
            <div
              className="profile-dropdown"
              onClick={() => setIsNavOpen(true)}
            >
              <NavLink
                to="/profile"
                style={({ isActive }) => (isActive ? activeStyle : {})}
              >
                <p>Profile</p>
              </NavLink>
              <p onClick={handleLogout}>Logout</p>
            </div>
          </div>
        ) : (
          <NavLink
            to="/login"
            style={({ isActive }) => (isActive ? activeStyle : {})}
            replace
            state={{ redirectTo: location.pathname }}
          >
            <div className="log-in" onClick={() => setIsNavOpen(true)}>
              <User /> Login
            </div>
          </NavLink>
        )}
      </div>

      <NavLink
        to="/checkout"
        style={({ isActive }) => (isActive ? activeStyle : {})}
        replace
        state={{ redirectTo: location.pathname }}
      >
        <div className="shoping-cart">
          <span className="item-count">{cartItemsLength}</span>
          <div className="icon-container">
            <ShoppingCart className="cart-icon" />
          </div>
        </div>
      </NavLink>
      <div className="burger-menu" onClick={toggleNav}>
        {isNavOpen ? <Menu /> : <X />}
      </div>
    </div>
  );
};

export default Navbar;
