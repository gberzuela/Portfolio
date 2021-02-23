import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { NavBar } from "./components";
import Routes from "./routes";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes />
    </Router>
  );
};

render(<App />, document.getElementById("app"));
