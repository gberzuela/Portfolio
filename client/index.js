import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";

import { NavBar } from "./components";
import Routes from "./routes";

const theme = createMuiTheme({
  typography: {
    allVariants: {
      color: "white",
    },
  },
  palette: {
    divider: "#5c5c5c",
    paper: "#424242",
    blue: "#0c9ef3",
    secondary: {
      main: "#fff",
    },
  },
  breakpoints: {
    values: {
      md: 767,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("app"));
