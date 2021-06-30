import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useScrollTrigger,
  Slide,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./styles";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const TopBar = ({ toggleSideMenu, setState }) => {
  const classes = useStyles();

  return (
    <HideOnScroll>
      <AppBar
        position="sticky"
        className={classes.AppBar}
        elevation={0}
        fullWidth
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleSideMenu(true)}
          >
            <MenuIcon />
          </IconButton>
          <NavLink to="/" className={classes.title}>
            <Typography variant="h6" className={classes.title}>
              HK
            </Typography>
          </NavLink>

          <Button color="inherit" className={classes.loginButton}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default TopBar;
