import React from "react";

import { Container, makeStyles } from "@material-ui/core";

import Fade from "react-reveal/Fade";

import Title from "./Title";

const styles = makeStyles({
  container: {
    padding: "100px 16%",
  },
});

const ProjectsPage = () => {
  const classes = styles();
  return (
    <Container id="projects" className={classes.container}>
      <Fade left>
        <Title title="Projects" />
      </Fade>
    </Container>
  );
};

export default ProjectsPage;
