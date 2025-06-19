import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Outlet
} from "react-router-dom";

import "./Frontpage/App.css";

import VideoBackground from "./Frontpage/VideoBackground";
import Features from "./Frontpage/Features";
import AppComing from "./Frontpage/AppComing";
import Footer from "./Frontpage/Footer";

import Main from "./Mainpage/main"; // Contains navbar + tabs

// Tabs
import Parks from "./Mainpage/Tabs/Parks.js";
import Cafes from "./Mainpage/Tabs/Cafe.js";
import Libraries from "./Mainpage/Tabs/Library.js";

// Videos
import cafeVideo from "./assets/Cafevideo.mp4";
import libraryVideo from "./assets/libraryvideo.mp4";
import parkVideo from "./assets/Parkvideo.mp4";

// ✅ Landing Page
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

// ✅ Inline Layout Component for Tabs (Navbar + Tabs + Outlet)
function MainWithTabs() {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
}

// ✅ Final App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Grouped routes under Main layout */}
        <Route element={<MainWithTabs />}>
          <Route path="/parks" element={<Parks />} />
          <Route path="/cafes" element={<Cafes />} />
          <Route path="/libraries" element={<Libraries />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
