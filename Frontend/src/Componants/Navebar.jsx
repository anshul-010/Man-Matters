

import React, { useEffect, useState } from "react";
import "../Styles/navbar.css";
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
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/actions";
import { getProducts } from "../Redux/ProductReducer/action";
import { useNavigate } from "react-router-dom";
import { GetCartItems } from "../Redux/CartReducer/actions";

const Navbar = () => {
  const cartLocalStorageKey = "ManWellCart";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isNavOpen, setIsNavOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const userName = useSelector((store) => store.AuthReducer.name);
  const isAuth = useSelector((store) => store.AuthReducer.isAuth);

  const toggleCart = useSelector((store) => store.CartReducer.toggleCart);
  const [cartItemsLength, setCartItemsLength] = useState(
    GetCartItems().length || 0
  );

  useEffect(() => {
    setCartItemsLength(GetCartItems().length || 0);
  }, [toggleCart]);

  let paramObj = {
    params: {
      category: searchTerm,
    },
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  function handleRelocate() {
    navigate("/all-products");
  }

  useEffect(() => {
    dispatch(getProducts(paramObj));
  }, [searchTerm]);

  const activeStyle = {
    color: "#ff6347",
  };

  return (
    <div className={`navbar ${isNavOpen ? "" : "open"}`}>
      <Link to={"/"}>
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
        <NavLink to={"/all-products"}>
          <div
            className="nav-link"
            onClick={() => setIsNavOpen(true)}
            style={{ display: "flex", gap: "2px" }}
          >
            <Home size={22} color={"black"} strokeWidth={1.1} />
            <span className="nav-link" style={{color:""}}>All Products</span>
          </div>
        </NavLink>
        <NavLink to="/schedule-appoinment" activeStyle={{ color: "#ff6347" }}>
          <div
            className="nav-link"
            onClick={() => setIsNavOpen(true)}
            style={{ display: "flex", gap: "2px" }}
          >
            <CalendarCheck size={22} strokeWidth={1.1} />
            <span>Schedule Appointment</span>
          </div>
        </NavLink>
        <NavLink to="/self-assessment" activeStyle={{ color: "#ff6347" }}>
          <div
            className="nav-link"
            onClick={() => setIsNavOpen(true)}
            style={{ display: "flex", gap: "2px" }}
          >
            <PanelBottomClose size={22} strokeWidth={1.1} />{" "}
            <span>Self Assessment</span>
          </div>
        </NavLink>

        {isAuth ? (
          <div className="user-profile">
            <span className="log-in">
              <UserRound color="#1f5c9d" size={22} /> {userName}
            </span>
            <div className="profile-dropdown">
              <NavLink to="/profile" activeStyle={activeStyle}>
                <p>Profile</p>
              </NavLink>
              <p onClick={handleLogout}>Logout</p>
            </div>
          </div>
        ) : (
          <NavLink to="/login" activeStyle={activeStyle}>
            <div className="log-in" onClick={() => setIsNavOpen(true)}>
              <User /> Login
            </div>
          </NavLink>
          //   <NavLink to="/login" activeStyle={{ color: "#ff6347" }}>
          //   <div className="nav-link" onClick={() => setIsNavOpen(true)} style={{display:"flex",gap:"5px"}}>
          //     <User />  <span>Login</span>
          //  </div>
          // </NavLink>
        )}
      </div>

      <NavLink to="/checkout" activeStyle={activeStyle}>
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
