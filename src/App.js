import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";
// ✅ Landing Page (from Frontpage folder)
//import LandingPage from "./Frontpage/LandingPage";
import "./Frontpage/App.css";

import VideoBackground from "./Frontpage/VideoBackground";
import Features from "./Frontpage/Features";
import AppComing from "./Frontpage/AppComing";
import Footer from "./Frontpage/Footer";

// ✅ Main layout and tabbed subpages
import Main from "./Mainpage/main";
import Parks from "./Mainpage/Tabs/Parks";
import Cafes from "./Mainpage/Tabs/Cafe";
import Libraries from "./Mainpage/Tabs/Library";

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

    <div className="overlay-text">
<button onClick={() => navigate('/parks')} className="welcome-button">
        Welcome
      </button>
    </div>

    <Features />
    <AppComing />
    <Footer />
  </>
);

}

// ✅ Layout wrapper to keep Navbar + Tabs
function MainWithTabs() {
  return (
    <>
      <Main />
      <Outlet />
    </>
  );
}

// ✅ App Entry Point
function App() {
  return (
    <Router>
      <Routes>
        {/* Frontpage Landing */}
        <Route path="/" element={<LandingPage />} />

        {/* Tab routes under shared layout */}
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
