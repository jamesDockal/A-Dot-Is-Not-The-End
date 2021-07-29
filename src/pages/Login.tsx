import React, { useState } from "react";
import "../styles/login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <h1 className="company-name">Psychometrika</h1>
      <h3 className="info">Desafio Trainee</h3>
      <h3 className="info">Login</h3>

      <form action="">
        <div className="email-box">
          <input required name="email" className="email-input" type="text" />
          <label className="email-label">Email</label>
        </div>

        <div className="password-box">
          <input
            required
            className="password-input"
            type={showPassword ? "text" : "password"}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className={`${
              showPassword ? "toggle-disabled" : "toggle-active"
            } material-icons`}
          >
            visibility_off
          </span>
          <label className="password-label">Senha</label>
        </div>

        <button className="login-button">Login</button>
      </form>
    </div>
  );
}
