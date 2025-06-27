import React, { useState } from 'react';
import '../Mainpage/main.css';
import AuthSlide from './AuthSlide';
import { Link } from 'react-router-dom';

const Main = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [city, setCity] = useState(''); // ✅ renamed from "location" to avoid conflict

  return (
    <>
      <header className="header-class">
        <div className="nav-tab">
        <div className="navbar">
          <div className="nav-logo border">
            <div className="logo"></div>
          </div>

          <div className="nav-search">
            <div className="location-container">
              <i className="fa-solid fa-location-dot location-icon"></i>
              <select
                className="location-dropdown"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Select City</option>
                <option value="mumbai">Mumbai</option>
                <option value="pune">Pune</option>
                <option value="surat">Surat</option>
                <option value="bangalore">Bangalore</option>
              </select>
            </div>

            <input type="text" placeholder="Search places" className="search-input" />
            <div className="search-icon">
              
              <i className="fa-solid fa-magnifying-glass"></i>
              
            </div>
          </div>

          <button onClick={() => setShowAuth(true)} className="open-login-btn">
            Login / Signup
          </button>
        </div>
      

      {/* Tab panel below navbar */}
      <div className="tab-panel">
        <Link to="/parks" className="tab">Parks</Link>
        <Link to="/cafes" className="tab">Cafes</Link>
        <Link to="/libraries" className="tab">Libraries</Link>
      </div>
      

      {showAuth && <AuthSlide onClose={() => setShowAuth(false)} />}
        </div>

      </header>
    </>
  );
};

export default Main;
