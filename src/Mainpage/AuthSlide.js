import React, { useState } from "react";
import '../Mainpage/main.css'; // Make sure this contains your modal + auth styles

const AuthSlide = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className={`auth-container ${isSignup ? "signup-mode" : ""}`}>
      {/* ---------------- FORM SECTION ---------------- */}
      <div className="form-section">
        {isSignup ? (
          <form className="modal-content">
            <h2>Sign Up</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="tel" placeholder="Phone Number" required />
            <button type="submit" className="otp-btn">Sign Up</button>
            <p className="signup-text">
              Already have an account? <a onClick={() => setIsSignup(false)}>Login</a>
            </p>
          </form>
        ) : (
          <form className="modal-content">
            <h2>Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="otp-btn">Login</button>
            <p className="signup-text">
              Don't have an account? <a onClick={() => setIsSignup(true)}>Sign Up</a>
            </p>
          </form>
        )}
      </div>

      {/* ---------------- INFO SECTION ---------------- */}
      <div className="info-section">
        {!isSignup ? (
          <div className="panel-content">
            <h2>Welcome to QuietSpace</h2>
            <p>Discover quiet places to relax and focus.</p>
            <button onClick={() => setIsSignup(true)}>Sign Up</button>
          </div>
        ) : (
          <div className="panel-content">
            <h2>Welcome Back!</h2>
            <p>If you already have an account, just sign in.</p>
            <button onClick={() => setIsSignup(false)}>Sign In</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthSlide;
