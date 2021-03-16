import React, { useState } from "react";

import {
  Avatar,
  Card,
  CardHeader,
  Collapse,
  Divider,
  IconButton,
  List,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = makeStyles({
  header: {
    color: "white",
  },
  list: {
    padding: "10px",
  },
  container: {
    backgroundColor: "#333333",
    textAlign: "left",
  },
});

const TimelineCard = ({ data: { date, image, event, location, info } }) => {
  const classes = styles();
  const [open, setOpen] = useState(false);

  return (
    <Card className={classes.container}>
      <CardHeader
        avatar={<Avatar src={image} alt={event} />}
        title={event}
        subheader={`${location} | ${date}`}
        subheaderTypographyProps={{ color: "secondary" }}
        action={
          <IconButton onClick={() => setOpen(!open)}>
            <ExpandMoreIcon />
          </IconButton>
        }
      />
      <Collapse in={open} timeout="auto">
        <Divider />
        <List className={classes.list}>
          {info.map((item, index) => (
            <ListItemText
              key={index}
              primary={`- ${item}`}
              className={classes.list}
            />
          ))}
        </List>
      </Collapse>
    </Card>
  );
};

export default TimelineCard;
