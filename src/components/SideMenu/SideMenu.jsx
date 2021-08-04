import React from "react";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import HelpIcon from "@material-ui/icons/Help";
import ChatIcon from "@material-ui/icons/Chat";
import HomeIcon from "@material-ui/icons/Home";
import AddBoxIcon from "@material-ui/icons/AddBox";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import useStyles from "./styles";

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
          <ListItem button key="Home" component={Link} to="/">
            <ListItemIcon className={classes.drawerIcons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" className={classes.listItemText} />
          </ListItem>
          <Divider />
          <Scroll to="description" smooth={true}>
            <ListItem button key="My Projects" onClick={toggleSideMenu(false)}>
              <ListItemIcon className={classes.drawerIcons}>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary="My Projects" />
            </ListItem>
          </Scroll>
          <Scroll to="skills" smooth={true}>
            <ListItem button key="My Progress" onClick={toggleSideMenu(false)}>
              <ListItemIcon className={classes.drawerIcons}>
                <HelpIcon />
              </ListItemIcon>
              <ListItemText primary="My Progress" />
            </ListItem>
          </Scroll>
          <Scroll to="footer" smooth={true}>
            <ListItem button key="Contact me" onClick={toggleSideMenu(false)}>
              <ListItemIcon className={classes.drawerIcons}>
                <ContactMailIcon />
              </ListItemIcon>
              <ListItemText primary="Contact me" />
            </ListItem>
          </Scroll>
          <Divider />
          <ListItem button key="Leave message">
            <ListItemIcon className={classes.drawerIcons}>
              <ChatIcon />
            </ListItemIcon>
            <ListItemText primary="Leave message" />
          </ListItem>

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
