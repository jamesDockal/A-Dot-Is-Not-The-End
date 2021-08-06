import React, { useEffect } from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="info">
          <span className="company-name">Psychometrika</span>
          <small className="header-description">Desafio Trainee</small>
        </div>
        <div>
          <div>User image</div>
        </div>
      </div>
      <div className="header-container">
        <span className="school-name">Nome da Escola</span>
      </div>
    </>
  );
}
