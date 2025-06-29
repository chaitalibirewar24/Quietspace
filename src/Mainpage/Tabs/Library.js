import React from 'react';
import library from '../../backend/library-list';
import './Library.css';

const Library = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Libraries in Your City</h2>
      <div className="Library-grid">
        {library.map((lib) => (
          <div key={lib.id} className="Library-card">
            <img src={lib.image} alt={lib.name} className="Library-image" />
            <h3>{lib.name}</h3>
            <p className="rating">
              Rating :{' '}
              {Array.from({ length: 5 }).map((_, index) => {
                const fullStars = Math.floor(lib.rating.stars);
                const hasHalfStar = lib.rating.stars - fullStars >= 0.5;

                if (index < fullStars) {
                  return <i key={index} className="fa-solid fa-star"></i>;
                } else if (index === fullStars && hasHalfStar) {
                  return <i key={index} className="fa-solid fa-star-half-stroke"></i>;
                } else {
                  return <i key={index} className="fa-regular fa-star"></i>;
                }
              })}
              {' '}{lib.rating.stars}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
