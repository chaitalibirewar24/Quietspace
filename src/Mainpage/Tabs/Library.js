import React from 'react';
import library from '../../backend/library-list';
import './Library.css'; // Optional for styling

const Library = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Libraries in Your City</h2>
      <div className="Library-grid">
        {library.map((Library) => (
          <div key={Library.id} className="Library-card">
            <img src={Library.image} alt={Library.name} className="Library-image" />
            <h3>{Library.name}</h3>
            <p>Rating: ⭐ {Library.rating.stars}</p>
            <p>Tags: {Library.keywords.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;
