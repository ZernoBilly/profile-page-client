import React, { useState } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HelpIcon from "@material-ui/icons/Help";
import ChatIcon from "@material-ui/icons/Chat";
import HomeIcon from "@material-ui/icons/Home";
import AddBoxIcon from "@material-ui/icons/AddBox";
import Drawer from "@material-ui/core/Drawer";
import { Link as Scroll } from "react-scroll";

import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const SideMenu = ({
  toggleSideMenu,
  sideMenuOpen,
  handleClickOpen,
  isSignup,
}) => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        anchor={"left"}
        open={sideMenuOpen}
        onClose={toggleSideMenu(false)}
        classes={{ paper: classes.drawer }}
      >
        <List className={classes.list} FullHeight>
          <ListItem button key="Home">
            <ListItemIcon className={classes.drawerIcons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.listItemText} />
          </ListItem>
          <ListItem button key="About me">
            <ListItemIcon className={classes.drawerIcons}>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="About me" />
          </ListItem>
          <Divider />
          <ListItem button key="Leave message">
            <ListItemIcon className={classes.drawerIcons}>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Leave message" />
          </ListItem>
          <Scroll to="footer" smooth={true}>
            <ListItem button key="Contact me" onClick={toggleSideMenu(false)}>
              <ListItemIcon className={classes.drawerIcons}>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact me" />
            </ListItem>
          </Scroll>
          <Divider />
          <ListItem
            button
            key="Create new Project"
            className={classes.addNewItem}
            onClick={handleClickOpen}
            disabled={!isSignup}
          >
            <ListItemIcon className={classes.drawerIcons}>
              <AddBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Create new Project" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default SideMenu;
