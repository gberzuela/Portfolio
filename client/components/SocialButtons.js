import React from "react";

import { Button, Container, Link, makeStyles } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";

import resume from "../../public/Resume.pdf";

const styles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "space-around",
  },
  linkedInButton: {
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
      <Link
        href="https://www.linkedin.com/in/gerald-lou-berzuela/"
        target="_blank"
      >
        <Button
          size="large"
          variant="contained"
          className={classes.linkedInButton}
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
      </Link>
      <Link href={resume} target="_blank">
        <Button
          size="large"
          variant="contained"
          startIcon={<DescriptionIcon />}
        >
          Resume
        </Button>
      </Link>
    </Container>
  );
};

export default SocialButtons;
