import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  const { innerWidth: width, innerHeight: height } = window;

  return (
    <nav className="navbar-container flex jcsb">
      <div className="navbar-list name flex jcfs">
        <Link to="/">Gerald Lou Berzuela</Link>
      </div>

      <div className="navbar-list flex jcsb">
        {width <= 768 ? (
          <HamburgerMenu />
        ) : (
          <>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
