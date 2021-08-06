import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Book from "../components/BookCard";
import Header from "../components/Header";
import { useUser } from "../contexts/UserContext";
import "../styles/home.css";

export default function Home() {
  const [token, setToken] = useState<string | undefined>(Cookies.get("token"));

  const hisotry = useHistory();

  if (!token) {
    hisotry.push("/login");
  }
  return (
    <div className="home-page">
      <Header />

      <Book />
    </div>
  );
}
