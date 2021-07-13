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
import { LocalDiningOutlined } from "@material-ui/icons";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const TopBar = ({
  toggleSideMenu,
  handleLoginFormOpen,
  isSignup,
  setSignup,
}) => {
  const classes = useStyles();

  //Handle signin button text
  const toggleSignin = () => {
    if (!isSignup) {
      return "Login";
    } else {
      return "Logout";
    }
  };

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
          <NavLink to="/" className={classes.titleLink}>
            <Typography variant="h6" className={classes.title}>
              HK
            </Typography>
          </NavLink>

          <Button
            color="inherit"
            className={classes.loginButton}
            onClick={handleLoginFormOpen}
          >
            {toggleSignin()}
          </Button>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default TopBar;
