import React from "react";
import { Link as Scroll } from "react-scroll";
import { IconButton, Typography } from "@material-ui/core";

import useStyles from "./styles";

const LowerSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.lowerSectionContainer}>
      <Scroll to="header" smooth={true}>
        <IconButton className={classes.upButton} size="large">
          <Typography className={classes.text}>Back to Top</Typography>
        </IconButton>
      </Scroll>
    </div>
  );
};

export default LowerSection;
