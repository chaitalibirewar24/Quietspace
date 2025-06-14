import React, { useState } from "react";
import "../Mainpage/LoginModal.css";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose }) => {

  if (!isOpen) return null;

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
          />
          <button className="email-btn" >
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
