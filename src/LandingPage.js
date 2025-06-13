// src/LandingPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.css';
import LoginModal from './LoginModal'; // Make sure this import is correct!

const LandingPage = () => {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false); // modal visibility state

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <div className="header">
      <section className="video-section">
        <video id="videoPlayer" autoPlay muted loop playsInline>
          <source src="/videos/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="overlay-text">
          <h1 id="website-name">QuietSpace</h1>
          <h6 id="slogan">For your Quiet days</h6>

          <button onClick={goToMain} className="welcome-button">
            Welcome
          </button>
        </div>
      </section>

      {/* Render modal if showLogin is true */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
};

export default LandingPage;
