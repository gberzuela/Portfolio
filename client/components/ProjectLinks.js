import React from "react";

import { Link, makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  link: {
    color: "white",
    "&:hover": {
      color: theme.palette.blue,
      transition: ".5s",
    },
  },
}));

const ProjectLinks = ({ link, icon }) => {
  const classes = styles();
  return (
    <Link href={link} target="blank" className={classes.link}>
      {icon}
    </Link>
  );
};

export default ProjectLinks;
