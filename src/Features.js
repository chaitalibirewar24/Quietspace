import React from 'react';
import cafeImg from './assets/Cafephoto.jpg';
import libraryImg from './assets/libraryphoto.jpg';
import parkImg from './assets/parkphoto.jpg';

const Features = () => {
  return (
    <div className="features">
      <div className="row">
        <div className="text-col">
          <h1>Classy Cafés</h1>
          <p>Enjoy the classy aroma of coffee while cozyness envelopes you</p>
        </div>
        <div className="img-col right">
          <a href="cafe.html"><img src={cafeImg} alt="Cafe" /></a>
        </div>
      </div>
      <div className="row">
        <div className="text-col">
          <h1>Limitless Libraries</h1>
          <p>Escape into silence and let your creative thoughts flow.</p>
        </div>
        <div className="img-col left">
          <a href="library.html"><img src={libraryImg} alt="Library" /></a>
        </div>
      </div>
      <div className="row">
        <div className="text-col">
          <h1>Pleasant Parks</h1>
          <p>This park offers a perfect blend of nature and calm. Relax, play, and breathe freely.</p>
        </div>
        <div className="img-col right">
          <a href="park.html"><img src={parkImg} alt="Park" /></a>
        </div>
      </div>
    </div>
  );
};

export default Features;
