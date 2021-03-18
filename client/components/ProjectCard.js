import React from "react";

import { Container, Link, makeStyles, Typography } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import YouTubeIcon from "@material-ui/icons/YouTube";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import ProjectLinks from "./ProjectLinks";

const styles = makeStyles((theme) => ({
  alternate: {
    flexDirection: "row-reverse",
  },
  container: {
    padding: "50px 0",
    display: "flex",
    [theme.breakpoints.down(768)]: {
      flexDirection: "column",
    },
  },
  linkContainer: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  contentContainer: {
    [theme.breakpoints.up(769)]: {
      width: "50%",
    },
    [theme.breakpoints.down(768)]: {
      paddingTop: "66px",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));

const ProjectCard = ({ data, alternate }) => {
  const { name, details, github, deploy, article, youtube, images } = data;
  const links = [
    [github, <GitHubIcon />, "github"],
    [deploy, <LinkIcon />, "deploy"],
    [article, <LinkIcon />, "article"],
    [youtube, <YouTubeIcon />, "youtube"],
  ];
  const classes = styles();

  return (
    <Container
      className={
        alternate
          ? `${classes.container} ${classes.alternate}`
          : classes.container
      }
    >
      <AwesomeSlider>
        {images.map((image, index) => (
          <div key={index} data-src={image} />
        ))}
      </AwesomeSlider>
      <Container className={classes.contentContainer}>
        <Container>
          <Typography variant="h4">{name}</Typography>
          <Typography variant="h6">{details}</Typography>
        </Container>
        <Container className={classes.linkContainer}>
          {links.map((entry) => {
            const [link, icon, key] = entry;
            if (link) return <ProjectLinks key={key} link={link} icon={icon} />;
          })}
        </Container>
      </Container>
    </Container>
  );
};

export default ProjectCard;
