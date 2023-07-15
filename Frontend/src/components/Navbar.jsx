import React from 'react';
import './Navbar.css'; 
import logo from '../images/sweet.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img 
          src={logo}
          alt="Logo"
          className="logo"
        />
        <a href="/" className="navbar-link">Home</a>
        <a href="/explore" className="navbar-link">Explore</a>
      </div>
      <div className="navbar-right">
        <a href="/user-profile" className="navbar-link">Profile</a>
      </div>
    </nav>
  );
};

export default Navbar;
