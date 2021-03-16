import React from "react";

import HomePageTitle from "./HomePageTitle";
import About from "./About";
import CustomTimeline from "./CustomTimeline";
import { Divider, makeStyles } from "@material-ui/core";

const styles = makeStyles({
  divider: {
    margin: "100px 20% 100px 20%",
  },
});

const HomePage = () => {
  const classes = styles();

  return (
    <div>
      <HomePageTitle />
      <Divider className={classes.divider} />
      <About />
      <Divider className={classes.divider} />
      <CustomTimeline />
    </div>
  );
};

export default HomePage;
