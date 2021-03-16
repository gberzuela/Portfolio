import React from "react";

import {
  Container,
  Divider,
  makeStyles,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Timeline } from "@material-ui/lab";

import Fade from "react-reveal/Fade";

import data from "../timelineData";
import CustomTimelineItem from "./CustomTimelineItem";

const styles = makeStyles((theme) => {
  return {
    container: {
      padding: "0 16%",
    },
    divider: {
      width: "33%",
      marginLeft: "10px",
    },
    titleContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: 0,
      marginBottom: "10px",
    },
  };
});

const CustomTimeline = () => {
  const classes = styles();
  const mediaQuery = useMediaQuery("(max-width: 767px)");

  return (
    <Container className={classes.container} id="background">
      <Fade up>
        <Container className={classes.titleContainer}>
          <Typography variant="h4">Background</Typography>
          <Divider className={classes.divider} />
        </Container>
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
