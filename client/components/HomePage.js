import React from "react";

import HomePageTitle from "./HomePageTitle";
import About from "./About";
import { Divider, makeStyles } from "@material-ui/core";
import { mergeClasses } from "@material-ui/styles";

const styles = makeStyles({
  divider: {
    margin: "100px 33% 100px 33%",
  },
});

const HomePage = () => {
  const classes = styles();

  return (
    <div>
      <HomePageTitle />
      <Divider className={classes.divider} />
      <About />
    </div>
  );
};

export default HomePage;
