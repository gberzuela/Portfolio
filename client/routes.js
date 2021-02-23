import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "./components";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default Routes;
