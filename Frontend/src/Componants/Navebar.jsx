import React, { useState } from "react";
import "../Styles/navbar.css";
import { Menu, X, ShoppingCart, UserRound, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/actions";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const dispatch = useDispatch()

  const userName = useSelector((store)=>store.AuthReducer.name)
  const isAuth = useSelector((store)=>store.AuthReducer.isAuth)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };


  const handleLogout = () => {
    dispatch(logout())
  };

  return (
    <div className={`navbar ${isNavOpen ? "" : "open"}`}>
      <Link to={"/"}>
        <div className="logo">Man Matters</div>
      </Link>

      <div id="search">
        <span>
          <Search color="#22548A" />
        </span>
        <input type="text" placeholder="search" />
      </div>

      <div className={`nav-links ${isNavOpen ? "" : "open"}`}>
        <Link to={"/all-products"}>
          <p onClick={() => setIsNavOpen(true)}>All Products</p>
        </Link>
        <Link to="/schedule-appoinment">
          <p onClick={() => setIsNavOpen(true)}>Schedule appoinment</p>
        </Link>
        <Link to="/self-assessment">
          <p onClick={() => setIsNavOpen(true)}>Self Assessment</p>
        </Link>

        {isAuth ? (
          <div className="user-profile">
            <span className="log-in">
              <UserRound color="#1f5c9d" /> {userName}
            </span>
            <div className="profile-dropdown">
              <p>Profile</p>
              <p onClick={handleLogout}>Logout</p>
            </div>
          </div>
        ) : (
          <Link to='/login'><div className="log-in" onClick={() => setIsNavOpen(true)} >
            Login
          </div></Link>
        )}
      </div>

      <div className="shoping-cart">
        <ShoppingCart />
      </div>
      <div className="burger-menu" onClick={toggleNav}>
        {isNavOpen ? <Menu /> : <X />}
      </div>
    </div>
  );
};

export default Navbar;
