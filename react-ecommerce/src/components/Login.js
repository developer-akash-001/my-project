import React from "react";
import { useNavigate } from "react-router-dom";
import "./LogRag.css";

function Login({ onLogin }) {
  const nav = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
    alert("Login Successful!");
    nav("/");
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don’t have an account? <a href="/register">Register</a></p>
    </div>
  );
}
export default Login;
