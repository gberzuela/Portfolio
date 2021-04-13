import React from "react";

import { Button, Container, Link, makeStyles } from "@material-ui/core";

import data from "../data/social";

const styles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.down(767)]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },
  button: {
    width: "150px",
  },
  github: {
    backgroundColor: "black",
    "&:hover": {
      backgroundColor: "#131313",
    },
    color: "white",
    marginBottom: "20px",
  },
  linkedin: {
    backgroundColor: "#004182",
    "&:hover": {
      backgroundColor: "#0054a9",
    },
    color: "white",
    marginBottom: "20px",
  },
}));

const SocialButtons = () => {
  const classes = styles();

  return (
    <Container className={classes.container}>
      {data.map((entry) => {
        const { key, link, name, image } = entry;
        return (
          <Link href={link} target="blank" key={key}>
            <Button
              size="large"
              variant="contained"
              className={`${classes[name.toLowerCase()]} ${classes.button}`}
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
