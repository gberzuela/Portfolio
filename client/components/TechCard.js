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
  Tooltip,
  useMediaQuery,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Fade from "react-reveal/Fade";

import data from "../data/tech";

const styles = makeStyles((theme) => ({
  arrow: {
    color: "black",
  },
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
  tooltip: {
    backgroundColor: "black",
    color: "white",
    fontSize: 20,
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
      <Fade left>
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
            <CardContent className={classes.content}>
              {data.map((entry) => {
                const { key, name, image } = entry;
                return (
                  <Tooltip
                    arrow
                    disableFocusListener
                    key={key}
                    title={name}
                    placement="bottom"
                    classes={{ tooltip: classes.tooltip, arrow: classes.arrow }}
                  >
                    <Avatar
                      alt={name}
                      src={image}
                      variant="square"
                      classes={{
                        img: classes.image,
                      }}
                      className={classes.avatar}
                    />
                  </Tooltip>
                );
              })}
            </CardContent>
          </Collapse>
        </Card>
      </Fade>
    </Container>
  );
};

export default TechCard;
