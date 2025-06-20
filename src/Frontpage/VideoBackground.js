// src/VideoBackground.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const VideoBackground = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <div className="header">
      <section className="video-section">
        <video id="videoPlayer" autoPlay muted playsInline />
        <div className="overlay-text">
          <h1 id="website-name">QuietSpace</h1>
          <h6 id="slogan">for your quiet days</h6>
        </div>
      </section>
    </div>
  );
};

export default VideoBackground;
