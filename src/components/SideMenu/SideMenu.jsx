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

import useStyles from "./styles";
import { Typography } from "@material-ui/core";

const SideMenu = ({ toggleSideMenu, sideMenuOpen, handleClickOpen }) => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        anchor={"left"}
        open={sideMenuOpen}
        onClose={toggleSideMenu(false)}
      >
        <List className={classes.list} FullHeight>
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.listItemText} />
          </ListItem>
          <ListItem button key="About me">
            <ListItemIcon>
              <HelpIcon />
            </ListItemIcon>
            <ListItemText primary="About me" />
          </ListItem>
          <Divider />
          <ListItem button key="Leave message">
            <ListItemIcon>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Leave message" />
          </ListItem>
          <ListItem button key="Contact me">
            <ListItemIcon>
              <ContactMailIcon />
            </ListItemIcon>
            <ListItemText primary="Contact me" />
          </ListItem>
          <Divider />
          <ListItem
            button
            key="Create new Project"
            className={classes.addNewItem}
            onClick={handleClickOpen}
          >
            <ListItemIcon>
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
