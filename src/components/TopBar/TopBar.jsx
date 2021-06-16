import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import useStyles from "./styles";

const TopBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.AppBar}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography className={classes.title} component={Link} to="/">
          This is header
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/Form"
          className={classes.createButton}
        >
          Create
        </Button>
        <Button color="inherit" className={classes.loginButton}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
