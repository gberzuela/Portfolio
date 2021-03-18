import React from "react";

import { Container, makeStyles, useMediaQuery } from "@material-ui/core";
import { Timeline } from "@material-ui/lab";

import Fade from "react-reveal/Fade";

import data from "../data/timeline";
import Title from "./Title";
import CustomTimelineItem from "./CustomTimelineItem";

const styles = makeStyles({
  container: {
    padding: "100px 16%",
  },
});

const CustomTimeline = () => {
  const classes = styles();
  const mediaQuery = useMediaQuery("(max-width: 767px)");

  return (
    <Container className={classes.container} id="background">
      <Fade left>
        <Title title="Background" />
        <Timeline align={mediaQuery ? "left" : "alternate"}>
          {data.map((entry) => (
            <CustomTimelineItem key={entry.key} data={entry} />
          ))}
        </Timeline>
      </Fade>
    </Container>
  );
};

export default CustomTimeline;
