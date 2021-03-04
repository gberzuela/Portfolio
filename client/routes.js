import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage, ProjectsPage, AboutPage, ContactPage } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
    </Switch>
  );
};

export default Routes;
