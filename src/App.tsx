import React from "react";
import Register from "./pages/Register";
import "./styles/app.css";

import Particles from "react-particles-js";
import particlesStyles from "./styles/particles";
import Login from "./pages/Login";
console.log(particlesStyles);

function App() {
  return (
    <div className="app">
      <Particles className="particles" params={particlesStyles} />
      {/* <Register /> */}
      <Login />
    </div>
  );
}

export default App;
