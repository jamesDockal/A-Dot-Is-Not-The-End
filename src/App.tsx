import React from "react";
import "./styles/app.css";

import Particles from "react-particles-js";
import particlesStyles from "./styles/particles";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      {/* <Register /> */}
      {/* <Login /> */}
      <Particles className="particles" params={particlesStyles} />
      <Home />
    </div>
  );
}

export default App;
