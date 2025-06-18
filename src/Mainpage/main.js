import React, { useState } from 'react';
import '../Mainpage/main.css';
import AuthSlide from './AuthSlide';

const Main = () => {
  const [showAuth, setShowAuth] = useState(false); // ✅ state to control AuthSlide

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

          {/* ✅ This button toggles the sliding Auth modal */}
          <button onClick={() => setShowAuth(true)} className="open-login-btn">
            Login / Signup
          </button>
        </div>
      </header>

      {/* ✅ Conditionally show the AuthSlide modal */}
      {showAuth && (
        <>
          <div className="overlay" onClick={() => setShowAuth(false)} />
          <div className="modal">
            <AuthSlide />
            <span className="close" onClick={() => setShowAuth(false)}>&times;</span>
          </div>
        </>
      )}
    </>
  );
};

export default Main;
