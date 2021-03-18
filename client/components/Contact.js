import React from "react";

import { Container, makeStyles } from "@material-ui/core";

import Fade from "react-reveal/Fade";

import Title from "./Title";
import ContactForm from "./ContactForm";

const styles = makeStyles((theme) => ({
  container: {
    [theme.breakpoints.up(1024)]: {
      padding: "100px 16%",
    },
    padding: "100px 10%",
  },
}));

const Contact = () => {
  const classes = styles();
  return (
    <Container id="contact" className={classes.container}>
      <Fade left>
        <Title title="Contact me!" />
        <ContactForm />
      </Fade>
    </Container>
  );
};

export default Contact;
