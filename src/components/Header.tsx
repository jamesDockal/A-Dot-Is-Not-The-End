import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import "../styles/header.css";

export default function Header() {
  const [token, setToken] = useState<string | undefined>(Cookies.get("token"));

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
        <div className="user-actions">
          <div className="user-image">
            <span className="mock-name">A</span>
          </div>
          <button className="logout-button" onClick={() => logOut(setToken)}>
            Log Out
          </button>
        </div>
      </div>
      <div className="header-container">
        <span className="school-name">Nome da Escola</span>
      </div>
    </>
  );
}
