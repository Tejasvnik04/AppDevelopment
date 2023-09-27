import React from 'react';
import './Navbar.css';

import Image  from "./logo.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo"><img src={Image} width={160} height={140}/></h1>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;