import React from "react";

import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import ComputerIcon from "@material-ui/icons/Computer";
import HistoryIcon from "@material-ui/icons/History";
import ContactMailIcon from "@material-ui/icons/ContactMail";

import { Link } from "react-scroll";

const list = [
  ["About Me", <HomeIcon />],
  ["Projects", <ComputerIcon />],
  ["Background", <HistoryIcon />],
  ["Contact", <ContactMailIcon />],
];

const styles = makeStyles((theme) => ({
  divider: {
    background: theme.palette.divider,
  },
  drawerPaper: {
    width: "200px",
    backgroundColor: theme.palette.paper,
  },
  drawerContent: {
    color: "white",
  },
}));

const MyDrawer = ({ open, setOpen }) => {
  const classes = styles();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => setOpen(false)}
      classes={{ paper: classes.drawerPaper }}
    >
      <Toolbar />
      <Divider className={classes.divider} />
      <List>
        {list.map((item) => {
          const [text, icon] = item;

          return (
            <Link to={text.toLowerCase()} smooth={true} key={text}>
              <ListItem button>
                <ListItemIcon className={classes.drawerContent}>
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  className={classes.drawerContent}
                />
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
};

export default MyDrawer;
