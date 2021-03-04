import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
  });

  return (
    <nav className="navbar-container flex jcsb">
      <div className="navbar-nav name flex jcfs">
        <Link to="/">Gerald Lou Berzuela</Link>
      </div>

      {width <= 768 ? (
        <div className="navbar-nav hamburger flex">
          <HamburgerMenu />
        </div>
      ) : (
        <div className="navbar-nav list flex jcsb">
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
