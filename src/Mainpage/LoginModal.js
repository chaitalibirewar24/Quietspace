import React, { useState } from "react";
import "../Mainpage/LoginModal.css";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleLogin = async () => {
    setErrorMsg("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Login failed");
        return;
      }

      // ✅ Store token and close modal
      localStorage.setItem("token", data.token);
      alert("Login successful!");
      onClose();

    } catch (err) {
      console.error("Login error:", err);
      setErrorMsg("Something went wrong. Try again.");
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

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="email-btn" onClick={handleLogin}>
            Login with Email
          </button>

          {errorMsg && <p className="error">{errorMsg}</p>}

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
