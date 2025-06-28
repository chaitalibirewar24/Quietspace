import React, { useState } from "react";
import '../Mainpage/main.css';

const AuthSlide = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={`auth-container ${isSignup ? "signup-mode" : ""}`}>
      <span className="close" onClick={onClose}>&times;</span>

      {/* FORM SECTION */}
      <div className="form-section">
        <form className="modal-content">
          <h2>{isSignup ? "Sign Up" : "Login"}</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isSignup && <input type="tel" placeholder="Phone Number" required />}
          <button type="submit" className="otp-btn">{isSignup ? "Sign Up" : "Login"}</button>
          <p className="signup-text">
            {isSignup
              ? <>Already have an account? <a onClick={() => setIsSignup(false)}>Login</a></>
              : <>Don't have an account? <a onClick={() => setIsSignup(true)}>Sign Up</a></>
            }
          </p>
        </form>
      </div>

      {/* INFO SECTION */}
      <div className="info-section">
        <div className="panel-content">
          <h2>{isSignup ? "Welcome to QuietSpace" : "Welcome Back!"}</h2>
          <p>{isSignup ? "Discover quiet places to relax and focus. Already a member? " : "If dont have an account, just sign up."}</p>
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthSlide;
