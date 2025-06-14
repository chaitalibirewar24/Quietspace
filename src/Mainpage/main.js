import React, { useState } from 'react';
import '../Mainpage/main.css';
import LoginModal from '../Mainpage/LoginModal';
import SignupModal from '../Mainpage/SignupModal'; // ✅ import signup modal

const Main = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false); // ✅ new state for signup

  return (
    <>
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

          {/* ✅ login button triggers login modal */}
          <div className="nav-loginin border">
            <button className="login-btn" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </div>

          {/* ✅ signup button triggers signup modal */}
          <div className="nav-signup border">
            <button className="login-btn" onClick={() => setShowSignup(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </header>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
      <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
    </>
  );
};

export default Main;
