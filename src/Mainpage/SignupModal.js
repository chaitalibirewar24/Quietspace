// src/SignupModal.jsx
import React, { useState } from "react";
import './LoginModal.css'; // ✅ Correct

const SignupModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSignUp = () => {
    alert("Signup functionality is not yet connected.\nYou entered: " + email);
    // Replace above with Supabase or API logic when ready
  };

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Sign Up</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="email-btn" onClick={handleSignUp}>
            Create Account
          </button>
          <div className="or">or</div>
          <button className="google-btn">Sign up with Google</button>
          <p className="signup-text">
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignupModal;
