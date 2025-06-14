import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="foot-pannel1">
      </div>
      <div className="foot-pannel2">
        <ul>
          <p>Get to Know Us</p>
          <a href="about.html" target="_blank" rel="noreferrer">About Us</a>
        </ul>
        <ul>
          <p>For Foodies Section</p>
          <a href="restaurants.html" target="_blank" rel="noreferrer">Find Restaurants</a>
          <a href="recipes.html" target="_blank" rel="noreferrer">Browse Recipes</a>
          <a href="offers.html" target="_blank" rel="noreferrer">Offers & Discounts</a>
        </ul>
        <ul>
          <p>Support Section</p>
          <a href="contact.html" target="_blank" rel="noreferrer">Contact Us</a>
          <a href="help.html" target="_blank" rel="noreferrer">Help Center</a>
          <a href="terms.html" target="_blank" rel="noreferrer">Terms & Conditions</a>
          <a href="privacy.html" target="_blank" rel="noreferrer">Privacy Policy</a>
        </ul>
      </div>
      <div className="foot-pannel4">
        <div className="copyright">
          © 2025, QuietSpace.com
        </div>
      </div>
    </footer>
  );
};

export default Footer;
