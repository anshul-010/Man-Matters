import React, { useState } from "react";
import "../Styles/navbar.css";
import { Menu, X, ShoppingCart, UserRound,Search} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className={`navbar ${isNavOpen ? "" : "open"}`}>
      <Link to={"/"}><div className="logo">Man Matters</div></Link>

      <div id="search">
        <span><Search color="#22548A" /></span>
        <input type="text" placeholder="search" />
      </div>

      <div className={`nav-links ${isNavOpen ? "" : "open"}`}>
      
        <Link to={"/all-products"} >
          <p onClick={()=>setIsNavOpen(true)}>All Products</p>
        </Link>
        <Link to='/schedule-appoinment'><p onClick={()=>setIsNavOpen(true)}>Schedule appoinment</p></Link>
        <Link to='/self-assessment'><p onClick={()=>setIsNavOpen(true)}>Self Assessment</p></Link>

        {isLoggedIn ? (
        <div className="user-profile">
          <span className="log-in" >
           <UserRound color="#1f5c9d"/> Username
          </span>
          <div className="profile-dropdown">
            <p>Profile</p>
            <p onClick={handleLogout}>Logout</p>
          </div>
        </div>
      ) : (
        <div className="log-in" onClick={handleLogin}>
          Log in
        </div>
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
