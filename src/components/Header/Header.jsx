import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo.svg";
import "./Header.css"
function Header() {
  return (
    <header className="header">
    <nav className="header__nav">
    <div className="nav_logo">
          <Link to="/">
            <img src={Logo} alt="logo kasa" />
          </Link>
    </div>
    <div className="nav-links">
    <Link  to="/">
        Accueil
      </Link>

      <Link to="Apropos">
        A propos
      </Link>
      </div>
      </nav>
  </header>
  );
}

export default Header;