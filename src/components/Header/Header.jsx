import React, { useState, useEffect } from "react";
import { Typography, IconButton, Collapse } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

import useStyles from "./styles";

const Header = () => {
  const classes = useStyles();

  //Collapse transition
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.titleContainer} id="header">
      <Collapse
        in={checked}
        {...(checked ? { timeout: 800 } : {})}
        collapsedHeight={50}
      >
        <Typography
          className={classes.title}
          variant="h2"
          component="h2"
          gutterBottom
        >
          Welcome to
        </Typography>
        <Typography className={classes.lowerTitle} variant="h4">
          My <span className={classes.coloredTitle}>ProfilePage</span>
        </Typography>

        <Scroll to="description" smooth={true}>
          <IconButton className={classes.downButton} size="large">
            <ExpandMoreIcon />
          </IconButton>
        </Scroll>
      </Collapse>
    </div>
  );
};

export default Header;
