import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import './Frontpage/App.css';

import VideoBackground from './Frontpage/VideoBackground';
import Features from './Frontpage/Features';
import AppComing from './Frontpage/AppComing';
import Footer from './Frontpage/Footer';
import Main from './Mainpage/main';

import cafeVideo from './assets/Cafevideo.mp4';
import libraryVideo from './assets/libraryvideo.mp4';
import parkVideo from './assets/Parkvideo.mp4';

// ✅ Landing Page Component
function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const videoList = [cafeVideo, libraryVideo, parkVideo];
    let current = 0;

    function playVideo(index) {
      const player = document.getElementById("videoPlayer");
      if (!player) return;
      player.src = videoList[index];
      player.load();
      player.play().catch(console.error);

      setTimeout(() => {
        current = (current + 1) % videoList.length;
        playVideo(current);
      }, 5000);
    }

    setTimeout(() => {
      playVideo(current);
    }, 0);
  }, []);

  return (
    <>
      <VideoBackground />
      <Features />
      <AppComing />
      <Footer />
    </>
  );
}

// ✅ App Component with Routes
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </Router>
  );
}


export default App;
