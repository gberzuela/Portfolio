import React from "react";

import { Container, Divider, makeStyles, Typography } from "@material-ui/core";

const styles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    padding: 0,
    marginBottom: "20px",
  },
  divider: {
    width: "33%",
    marginLeft: "10px",
  },
});

const Title = ({ title }) => {
  const classes = styles();
  return (
    <Container className={classes.container}>
      <Typography variant="h4">{title}</Typography>
      <Divider className={classes.divider} />
    </Container>
  );
};

export default Title;
