import React from "react";
import { Link as Scroll } from "react-scroll";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { IconButton } from "@material-ui/core";

import useStyles from "./styles";

const LowerSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.lowerSectionContainer}>
      <Scroll to="header" smooth={true}>
        <IconButton className={classes.upButton} size="large">
          <ExpandLessIcon />
        </IconButton>
      </Scroll>
    </div>
  );
};

export default LowerSection;
