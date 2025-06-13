// src/Main.jsx
import React from 'react';
import './main.css';  // Or create a new CSS if needed

const Main = () => {
  return (
    <header>
      <div className="navbar">
        <div className="nav-logo border">
          <div className="logo"></div>
        </div>

        <div className="nav-search">
          <input type="text" placeholder="Search places" className="search-input" />
          <div className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>

        <div className="nav-loginin border">
          <a href="#"><span>Log In</span></a>
        </div>

        <div className="nav-signup border">
          <a href="#"><span>Sign Up</span></a>
        </div>
      </div>
    </header>
  );
};

export default Main;
