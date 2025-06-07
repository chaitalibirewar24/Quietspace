import React, { useEffect } from 'react';
import './App.css';
import VideoBackground from './VideoBackground';
import Features from './Features';
import AppComing from './AppComing';
import Footer from './Footer';

// ✅ Import video files
import cafeVideo from './assets/Cafevideo.mp4';
import libraryVideo from './assets/libraryvideo.mp4';
import parkVideo from './assets/Parkvideo.mp4';

function App() {
  useEffect(() => {
    const videoList = [cafeVideo, libraryVideo, parkVideo];
    let current = 0;
    const player = document.getElementById("videoPlayer");

    function playVideo(index) {
      if (!player) return;
      player.src = videoList[index];
      player.load();
      player.play().catch(console.error);

      setTimeout(() => {
        current = (current + 1) % videoList.length;
        playVideo(current);
      }, 5000);
    }

    playVideo(current);
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

export default App;
