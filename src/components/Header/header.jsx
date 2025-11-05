import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <NavLink to="/" exact activeClassName="active"><img src="img/dora_logo.png" alt="Man" className="logo" /><span>DORA PRODUCTIONS</span></NavLink>
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><NavLink to="/" exact activeClassName="active" onClick={() => setMenuOpen(false)}>HOME</NavLink></li>
        <li><NavLink to="/portfolio" exact activeClassName="active" onClick={() => setMenuOpen(false)}>PORTFOLIO</NavLink></li>
        <li><NavLink to="/services" exact activeClassName="active" onClick={() => setMenuOpen(false)}>SERVICES</NavLink></li>
        <li><NavLink to="/about" exact activeClassName="active" onClick={() => setMenuOpen(false)}>ABOUT</NavLink></li>
      </ul>
    </header>
  );
};

export default Header;