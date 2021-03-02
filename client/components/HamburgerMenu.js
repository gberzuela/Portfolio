import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./HamburgerMenu.css";

const HamburgerMenu = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className="menu-wrap flex jcc aic">
      <input
        type="checkbox"
        className="toggler"
        checked={open}
        onChange={() => setOpen(!open)}
      ></input>
      <div className="hamburger flex jcc aic">
        <div></div>
      </div>
      <div className="menu flex aic jcc">
        <div className="flex aic jcc">
          <div>
            <ul>
              <li>
                <Link to="/" onClick={closeMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/profile" onClick={closeMenu}>
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={closeMenu}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
