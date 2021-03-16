import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage, ProjectsPage, ContactPage } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/projects" component={ProjectsPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route component={HomePage} />
    </Switch>
  );
};

export default Routes;
