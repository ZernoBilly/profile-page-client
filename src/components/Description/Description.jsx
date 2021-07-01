import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";

import useStyles from "./styles";

const Description = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer}>
      <Grid item xs={12} sm={4}>
        <Typography>Halllofasfjojasfoj</Typography>
      </Grid>
      <Divider
        orientation="vertical"
        variant="fullWidth"
        className={classes.divider}
      />
      <Grid item xs={12} sm={4}>
        <Typography>Halllofasfjojasfoj</Typography>
      </Grid>
    </Grid>
  );
};
export default Description;
