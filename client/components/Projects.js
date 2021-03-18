import React from "react";

import { Container, makeStyles } from "@material-ui/core";

import Fade from "react-reveal/Fade";

import data from "../data/projects";
import Title from "./Title";
import ProjectCard from "./ProjectCard";

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
        {data.map((entry, index) => (
          <ProjectCard key={entry.key} data={entry} alternate={index % 2} />
        ))}
      </Fade>
    </Container>
  );
};

export default ProjectsPage;
