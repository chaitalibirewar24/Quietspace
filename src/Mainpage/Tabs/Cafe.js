import React from 'react';
import cafes from '../../backend/cafes-list';
import './Cafes.css'; // Optional for styling

const Cafes = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Cafes in Your City</h2>
      <div className="cafes-grid">
        {cafes.map((cafe) => (
          <div key={cafe.id} className="cafe-card">
            <img src={cafe.image} alt={cafe.name} className="cafe-image" />
            <h3>{cafe.name}</h3>
            <p>Rating: ⭐ {cafe.rating.stars}</p>
            <p>Tags: {cafe.keywords.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cafes;
