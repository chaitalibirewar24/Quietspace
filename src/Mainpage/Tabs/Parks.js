import React from 'react';
import parks from '../../backend/parks-list';
import './parks.css';

const Parks = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Parks in Your City</h2>
      <div className="Parks-grid">
        {parks.map((cafe) => (
          <div key={cafe.id} className="Parks-card">
            <img src={cafe.image} alt={cafe.name} className="Parks-image" />
            <h3>{cafe.name}</h3>
            <p className="rating">
              Rating :{' '}
              {Array.from({ length: 5 }).map((_, index) => {
                const fullStars = Math.floor(cafe.rating.stars);
                const hasHalfStar = cafe.rating.stars - fullStars >= 0.5;

                if (index < fullStars) {
                  return <i key={index} className="fa-solid fa-star"></i>;
                } else if (index === fullStars && hasHalfStar) {
                  return <i key={index} className="fa-solid fa-star-half-stroke"></i>;
                } else {
                  return <i key={index} className="fa-regular fa-star"></i>;
                }
              })}
              {' '}{cafe.rating.stars}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parks;
