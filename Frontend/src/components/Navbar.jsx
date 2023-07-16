import React from 'react';
import logo from '../images/sweet.png'; 

const Navbar = () => {

  // const handleLogout = () =>{
    // remove token when user logs out
    // localStorage.removeItem("token"); 
    // redirect to homepage after logout
  //   window.location.href="/"
  // }
  // if token exists, isLoggedIn becomes true and logout button appears
  // const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img 
          src={logo}
          alt="Logo"
          className="logo"
        />
        <a href="/" className="navbar-link">Home</a>
        <a href="/homes" className="navbar-link">Explore</a>
      </div>
      <div className="navbar-right">
        <a href="/admin" className="navbar-link">Admin</a>
        <a href="/signup-login" className="navbar-link">SignUp/Login</a>
        <a href="/" className="navbar-link">Logout</a>
      </div>
    </nav>
  );
};

export default Navbar;
