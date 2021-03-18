import React, { useEffect, useState } from "react";

import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Container,
  Divider,
  IconButton,
  makeStyles,
  useMediaQuery,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import data from "../data/tech";

const styles = makeStyles((theme) => ({
  avatar: {
    width: "100px",
    height: "100px",
    margin: "10px",
  },
  container: {
    padding: "100px 16%",
  },
  image: {
    objectFit: "contain",
  },
  content: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#505050",
  },
  header: {
    backgroundColor: theme.palette.blue,
    color: "white",
    textAlign: "center",
  },
}));

const TechCard = () => {
  const classes = styles();
  const mediaQuery = useMediaQuery("(min-width: 768px)");
  const [open, setOpen] = useState(mediaQuery);

  useEffect(() => {
    setOpen(mediaQuery);
  }, [mediaQuery]);

  return (
    <Container className={classes.container}>
      <Card>
        <CardHeader
          title="Technical Skills"
          className={classes.header}
          action={
            !mediaQuery && (
              <IconButton onClick={() => setOpen(!open)}>
                <ExpandMoreIcon />
              </IconButton>
            )
          }
        />
        <Collapse in={open} timeout="auto">
          <Divider />
          <CardContent className={classes.content}>
            {data.map((entry) => (
              <Avatar
                key={entry.key}
                alt={entry.name}
                src={entry.image}
                variant="square"
                classes={{
                  img: classes.image,
                }}
                className={classes.avatar}
              >
                {entry.name}
              </Avatar>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </Container>
  );
};

export default TechCard;
