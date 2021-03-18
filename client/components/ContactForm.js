import "regenerator-runtime/runtime";

import React, { useEffect, useState } from "react";

import { Button, Container, FormControl, makeStyles } from "@material-ui/core";

import CustomTextField from "./CustomTextField";
import { Alert } from "@material-ui/lab";

const styles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.blue,
    color: "white",
    fontWeight: "bold",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: 0,
  },
  email: {
    marginLeft: "5px",
  },
  message: {
    margin: "20px 0",
  },
  name: {
    marginRight: "5px",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    padding: 0,
  },
}));

const ContactForm = () => {
  const classes = styles();

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [message, setMessage] = useState("");
  const [messageError, setMessageError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateName = () => {
    if (!name) {
      setError("Please let me know who you are!");
      setNameError(true);
    } else {
      setNameError(false);
    }
  };

  const validateEmail = () => {
    const atPosition = email.indexOf("@");
    const dotPosition = email.lastIndexOf(".");

    if (
      atPosition < 1 ||
      dotPosition < atPosition + 2 ||
      dotPosition + 2 >= email.length
    ) {
      setError("Please provide a valid email!");
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const validateMessage = () => {
    if (!message) {
      setError("Please leave a message!");
      setMessageError(true);
    } else {
      setMessageError(false);
    }
  };

  const validateForm = () => {
    validateName();
    validateEmail();
    validateMessage();
    setSubmitted(true);
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const submitForm = () => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-form", name, email, message }),
    })
      .then((result) => console.log(result))
      .catch((error) => alert(error));
    // console.log(result);
  };

  useEffect(() => {
    if (!nameError && !emailError && !messageError) {
      if (submitted) submitForm();
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [nameError, emailError, messageError, submitted]);

  return (
    <Container>
      {/* <FormControl name="contact-form" method="post" data-netlify="true"> */}
      <input type="hidden" name="form-name" value="contact-form" />
      <Container className={classes.container}>
        <CustomTextField
          label="Name"
          value={name}
          callback={(e) => setName(e.target.value)}
          className={classes.name}
          multi={false}
          error={nameError}
        />
        <CustomTextField
          label="Email"
          value={email}
          callback={(e) => setEmail(e.target.value)}
          className={classes.email}
          multi={false}
          error={emailError}
        />
      </Container>
      <CustomTextField
        label="Message"
        value={message}
        callback={(e) => setMessage(e.target.value)}
        className={classes.message}
        multi={true}
        error={messageError}
      />
      <Container className={classes.buttonContainer}>
        <Button
          variant="contained"
          className={classes.button}
          onClick={validateForm}
        >
          Send Message
        </Button>
        {(nameError || emailError || messageError) && (
          <Alert severity="error">{error}</Alert>
        )}
      </Container>
      {/* </FormControl> */}
    </Container>
  );
};

export default ContactForm;
