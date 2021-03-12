import React, { useState } from "react";

import { AppBar, makeStyles, Toolbar } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import MenuIcon from "@material-ui/icons/Menu";

import MyDrawer from "./MyDrawer";

const styles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "black",
  },
  toolbar: {
    justifyContent: "flex-end",
  },
}));

const NavBar = () => {
  const classes = styles();
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <MenuIcon fontSize="large" onClick={() => setOpen(true)} />
        {open && <MyDrawer open={open} setOpen={setOpen} />}
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(NavBar);
