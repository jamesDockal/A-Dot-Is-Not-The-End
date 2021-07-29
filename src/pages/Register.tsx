import React from "react";
import "../styles/register.css";

export default function Register() {
  return (
    <div className="register-container">
      <h1 className="company-name">Psychometrika</h1>
      <h3 className="title">Desafio Trainee</h3>

      <input className="email-input" type="text" />
      <label className="email-label">Email</label>

      <input className="password-input" type="text" />
      <label className="password-label">Senha</label>
    </div>
  );
}
