import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="info">
          <span className="company-name">Psychometrika</span>
          <small className="header-description">Desafio Trainee</small>
        </div>
        <div>userImage</div>
      </div>
      <div className="header-container">
        <span className="school-name">Nome da Escola</span>
      </div>
    </>
  );
}
