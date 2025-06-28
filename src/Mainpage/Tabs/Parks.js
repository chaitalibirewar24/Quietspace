import React from 'react';
import './parks.css';
import parks from '../../backend/parks-list.js';

const Parks = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Parks in Your City</h2>
      <div className="Parks-grid">
        {parks.map((Park) => (
          <div key={Park.id} className="Parks-card">
            <img src={Park.image} alt={Park.name} className="Parks-image" />
            <h3>{Park.name}</h3>
            <p>Rating: ⭐ {Park.rating.stars}</p>
            <p>Tags: {Park.keywords.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parks;
console.log("Rendering Parks component:", parks);
