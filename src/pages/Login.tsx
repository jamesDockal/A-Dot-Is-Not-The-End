import Cookies from "js-cookie";
import React, { FormEvent, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import "../styles/login.css";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useUser();

  const token = Cookies.get("token");

  useEffect(() => {
    if (token) {
      history.push("/");
    }
  }, [token]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage("");
    try {
      await login(email, password);
      history.push("/");
    } catch (e) {
      console.log("error", e.message);
      setErrorMessage(e.message);
    }
  }

  return (
    <div className="login-container">
      <h1 className="company-name">Psychometrika</h1>
      <h3 className="info">Desafio Trainee</h3>
      <h3 className="info">Login</h3>

      <form onSubmit={(e) => handleSubmit(e)} action="">
        <div className="email-box">
          <span>Email</span>
          <input
            required
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email-input"
            placeholder="Seu email institucional"
            type="text"
          />
          {/* <label className="email-label">Email</label> */}
        </div>

        <div className="password-box">
          <span>Password</span>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password-input"
            type={showPassword ? "text" : "password"}
            placeholder="Mínimo de 8 caracteres"
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className={`${
              showPassword ? "toggle-disabled" : "toggle-active"
            } material-icons`}
          >
            visibility_off
          </span>
          {/* <label className="password-label">Senha</label> */}
        </div>
        <div className="errox-box">
          <span className="error-message">{errorMessage}</span>
        </div>
        <button className="login-button">Login</button>
      </form>
    </div>
  );
}
