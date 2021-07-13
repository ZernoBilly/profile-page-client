import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import useStyles from "./styles";

const AboutMeHeader = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.headerContainer}>
      <Grid item xs={12} md={12} className={classes.headerIcon}>
        <ArrowBackIosIcon />
      </Grid>
      <Grid item xs={12} md={12} className={classes.header}>
        <Typography>Header</Typography>
      </Grid>
    </Grid>
  );
};

export default AboutMeHeader;
