import React from "react";
import Book from "../components/BookCard";
import Header from "../components/Header";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <Book />
    </div>
  );
}
