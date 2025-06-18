// src/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mainpage/main.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  const goToAuth = () => {
    navigate('/auth');
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
    </div>
  );
};

export default LandingPage;
