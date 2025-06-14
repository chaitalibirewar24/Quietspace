import React, { useState } from "react";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSendEmail = async () => {
    const { error } = await supabase.auth.signInWithOtp({ email });

    if (error) {
      alert("Error sending login link: " + error.message);
    } else {
      alert("Check your email for the login link!");
    }
  };

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>&times;</span>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="email-btn" onClick={handleSendEmail}>
            Send Login Link
          </button>
          <div className="or">or</div>
          <button className="google-btn">Sign in with Google</button>
          <p className="signup-text">
            New to site? <a href="#">Create account</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
