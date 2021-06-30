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
    <AppBar position="sticky" className={classes.AppBar} elevation={0}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.title}
          component={Link}
          to="/"
          variant="h6"
        >
          This is header
        </Typography>

        <Button color="inherit" className={classes.loginButton}>
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
