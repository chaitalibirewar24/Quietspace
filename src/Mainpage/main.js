import React, { useState } from 'react';
import '../Mainpage/main.css';
import AuthSlide from './AuthSlide';
import { Link } from 'react-router-dom';

const Main = () => {
  const [showAuth, setShowAuth] = useState(false);

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

          <button onClick={() => setShowAuth(true)} className="open-login-btn">
            Login / Signup
          </button>
        </div>
      </header>

      {/* Tab panel below navbar */}
      <div className="tab-panel">
        <Link to="/parks" className="tab">Parks</Link>
        <Link to="/cafes" className="tab">Cafes</Link>
        <Link to="/libraries" className="tab">Libraries</Link>
      </div>

      {showAuth && <AuthSlide onClose={() => setShowAuth(false)} />}
    </>
  );
};

export default Main;
