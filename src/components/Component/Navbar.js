import React, { useState } from "react";
import "./Navbar.css";
import obtainr from "../../assets/ObtainR.svg";
import hamburger from "../../assets/hamburger.png";
import closeMenu from "../../assets/Vector.png";
import { Link } from "react-router-dom";
const Navbar = ({ createAccModal, loginModal, setShowPage, showPage }) => {
  const [menu, setMenu] = useState(false);

  const showMobileMenu = () => {
    setMenu(!menu);
    setShowPage(!showPage);
  };
  return (
    <nav className="navbar">
      <Link to="/">
        <img src={obtainr} alt="logo" className="navbar-logo" />
      </Link>
      {/* <h1 className="nav-logo">
        OBTAIN<span style={{ color: "#61a0fe" }}>R</span>
      </h1> */}
      <div className="navbar-btn">
        <button className="nav-btn1" onClick={() => createAccModal()}>
          Create Account
        </button>
        <button className="nav-btn2" onClick={() => loginModal()}>
          Login
        </button>
      </div>
      <div className="navbar-mobileMenu" onClick={() => showMobileMenu()}>
        {menu ? (
          <img src={closeMenu} alt="logo" height="24px" width="auto" />
        ) : (
          <img src={hamburger} alt="logo" height="24px" width="auto" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
