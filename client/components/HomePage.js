import React from "react";

import { Divider, makeStyles } from "@material-ui/core";

import HomePageTitle from "./HomePageTitle";
import About from "./About";
import Projects from "./Projects";
import CustomTimeline from "./CustomTimeline";
import Contact from "./Contact";

const styles = makeStyles({
  divider: {
    margin: "0 20% 0 20%",
  },
});

const HomePage = () => {
  const classes = styles();

  return (
    <>
      <HomePageTitle />
      <Divider className={classes.divider} />
      <About />
      <Divider className={classes.divider} />
      <Projects />
      <Divider className={classes.divider} />
      <CustomTimeline />
      <Divider className={classes.divider} />
      <Contact />
    </>
  );
};

export default HomePage;
