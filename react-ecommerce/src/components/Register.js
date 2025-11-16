import React from "react";
import { useNavigate } from "react-router-dom";
import "./LogRag.css";

function Register() {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registered successfully! Please login now.");
    nav("/login");
  }; 

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}
export default Register;
