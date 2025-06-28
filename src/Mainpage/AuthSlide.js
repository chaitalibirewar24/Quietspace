import React, { useState } from "react";
import '../Mainpage/main.css';

const AuthSlide = ({ onClose }) => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = isSignup
      ? 'http://localhost:5000/api/auth/signup'
      : 'http://localhost:5000/api/auth/login';

    const payload = isSignup
      ? { email: formData.email, password: formData.password, phone: formData.phone }
      : { email: formData.email, password: formData.password };

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        if (!isSignup) {
          // TODO: navigate to dashboard or homepage
        }
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch (err) {
      alert("Server Error");
      console.error(err);
    }
  };

  return (
    <div className={`auth-container ${isSignup ? "signup-mode" : ""}`}>
      <span className="close" onClick={onClose}>&times;</span>

      {/* FORM SECTION */}
      <div className="form-section">
        <form className="modal-content" onSubmit={handleSubmit}>
          <h2>{isSignup ? "Sign Up" : "Login"}</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            onChange={handleChange}
          />
          {isSignup && (
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              onChange={handleChange}
            />
          )}
          <button type="submit" className="otp-btn">
            {isSignup ? "Sign Up" : "Login"}
          </button>

          <p className="signup-text">
            {isSignup
              ? <>Already have an account? <a onClick={() => setIsSignup(false)}>Login</a></>
              : <>Don't have an account? <a onClick={() => setIsSignup(true)}>Sign Up</a></>}
          </p>
        </form>
      </div>

      {/* INFO SECTION */}
      <div className="info-section">
        <div className="panel-content">
          <h2>{isSignup ? "Welcome to QuietSpace" : "Welcome Back!"}</h2>
          <p>
            {isSignup
              ? "Discover quiet places to relax and focus. Already a member?"
              : "If don't have an account, just sign up."}
          </p>
          <button onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthSlide;
