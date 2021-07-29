import React, { useState } from "react";
import "../styles/register.css";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="register-container">
      <h1 className="company-name">Psychometrika</h1>
      <h3 className="info">Desafio Trainee</h3>
      <h3 className="info">Registrar</h3>

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

        <button className="register-button">Resgistrar</button>
      </form>
    </div>
  );
}
