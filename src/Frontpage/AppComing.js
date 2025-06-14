import React from 'react';
import cafeIcon from '../assets/cafe_icon.png';
import libIcon from '../assets/lib_icon.png';
import parkIcon from '../assets/park_icon.png';
import natureIcon from '../assets/nature_icon.png';
import musicIcon from '../assets/music_icon.png';
import peaceIcon from '../assets/peace_icon.png';
import phoneImg from '../assets/phone2.png';


const AppComing = () => {
  return (
    <section className="app-coming">
      <h2>What’s waiting for you on the app?</h2>
      <p>Stay tuned – your peaceful escapes are going mobile!</p>
      <div className="feature-grid">
        <div className="feature-card"><img src={cafeIcon} alt="Cafe" /><span>Café Corners</span></div>
        <div className="feature-card"><img src={libIcon} alt="Library" /><span>Silent Study</span></div>
        <div className="feature-card"><img src={parkIcon} alt="Park" /><span>Sunny Parks</span></div>
        <div className="phone-container">
          <img src={phoneImg} alt="Phone" />
          <div className="phone-text"><pre> App Coming 
Soon!</pre></div>
        </div>
        <div className="feature-card"><img src={natureIcon} alt="Nature" /><span>Nature Nests</span></div>
        <div className="feature-card"><img src={musicIcon} alt="Music" /><span>Lo-fi Spots</span></div>
        <div className="feature-card"><img src={peaceIcon} alt="Peace" /><span>Zen Gardens</span></div>
      </div>
    </section>
  );
};

export default AppComing;
