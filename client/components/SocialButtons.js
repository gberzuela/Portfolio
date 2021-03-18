import React from "react";

import { Button, Container, Link, makeStyles } from "@material-ui/core";

import data from "../data/social";

const styles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  github: {
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#131313",
    },
    color: "white",
  },
  linkedin: {
    backgroundColor: "#004182",
    "&:hover": {
      backgroundColor: "#0054a9",
    },
    color: "white",
  },
});

const SocialButtons = () => {
  const classes = styles();

  return (
    <Container className={classes.container}>
      {data.map((entry) => {
        const { key, link, name, image } = entry;
        return (
          <Link href={link} target="_blank" key={key}>
            <Button
              size="large"
              variant="contained"
              className={classes[name.toLowerCase()]}
              startIcon={image}
            >
              {name}
            </Button>
          </Link>
        );
      })}
    </Container>
  );
};

export default SocialButtons;
