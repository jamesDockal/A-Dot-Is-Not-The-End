import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import "../styles/header.css";

export default function Header() {
  const [token, setToken] = useState<string | undefined>(Cookies.get("token"));
  const [isVisible, setIsVisible] = useState(false);

  const { logOut } = useUser();

  const hisotry = useHistory();

  if (!token) {
    hisotry.push("/login");
  }

  return (
    <>
      <div className="header-container">
        <div className="info">
          <span className="company-name">Psychometrika</span>
          <small className="header-description">Desafio Trainee</small>
        </div>
        <div
          onClick={() => setIsVisible(!isVisible)}
          className={`${isVisible && "with-background"} user-actions`}
        >
          <div className="user-image">
            <span className="mock-name">A</span>
          </div>
          <p className="arrow"></p>
        </div>
        <div className={`${!isVisible && "no-visible"} user-access`}>
          <span className="access-info">Você está atualmente com</span>
          <div className="options">
            <div className="option">
              <input id="option-one" name="radio" value="one" type="radio" />
              <label htmlFor="option-one">
                <span></span> Acesso do Admin
              </label>
            </div>
            <div className="option">
              <input
                id="option-two"
                name="radio"
                value="two"
                type="radio"
                defaultChecked
              />
              <label htmlFor="option-two">
                <span></span> Acesso do Aluno
              </label>
            </div>
          </div>
          <span className="change">Alteral</span>
          <button onClick={() => logOut(setToken)} className="logout-button">
            Sair
          </button>
        </div>
      </div>
      <div className="header-container">
        <span className="school-name">Nome da Escola</span>
      </div>
    </>
  );
}
