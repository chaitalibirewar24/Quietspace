import React from 'react';

const VideoBackground = () => {
  return (
    <div className="header">
      <section className="video-section">
        <video id="videoPlayer" autoPlay muted playsInline />
        <div className="overlay-text">
          <h1 id="website-name">QuietSpace</h1>
          <h6 id="slogan">For your Quiet days</h6>
        </div>
      </section>
    </div>
  );
};

export default VideoBackground;
