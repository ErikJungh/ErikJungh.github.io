import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const [hamburgerExpanded, setHamburgerExpanded] = useState(false);

  const handleClick = () => {
    setHamburgerExpanded(!hamburgerExpanded);
  };
  const closeMobileMenu = () => {
    setHamburgerExpanded(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Erik Junghahn <i className="fa-solid fa-mug-hot"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i
              className={hamburgerExpanded ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={hamburgerExpanded ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Experience"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-links" onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
