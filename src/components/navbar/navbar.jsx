import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      {/* nav container */}
      <div className="containerNav">
        {/* nav name */}
        <div className="navName">
          <span>Hi, im Muhammad Ghifari Fadza T</span>
          <span>One of enthusiastic engineer</span>
        </div>

        {/* nav menu right */}
        <div className="navMenuRight">
          <a href="#hero">Home</a>
          <a href="#who">Who</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* nav menu bottom */}
        <div className="navMenuBottom">
          <a href="#work">Work</a>
          <a href="http://">Service</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
