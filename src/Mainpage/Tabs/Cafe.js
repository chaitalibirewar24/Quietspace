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
            <p class="rating">
              Rating :  
               {Array.from({ length: 5 }).map((_, index) => {
                const fullStars = Math.floor(cafe.rating.stars);
                const hasHalfStar = cafe.rating.stars - fullStars >= 0.5;

                if (index < fullStars) {
                  return <i key={index} className="fa-solid fa-star"></i>; // full star
                } else if (index === fullStars && hasHalfStar) {
                  return <i key={index} className="fa-solid fa-star-half-stroke"></i>; // half star
                } else {
                  return <i key={index} className="fa-regular fa-star"></i>; // empty star
                }
              })}
              {cafe.rating.stars}
              <p class='cuisine-price'>{cafe.cuisine.join(', ')}
                {cafe.price}
              </p>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cafes;
