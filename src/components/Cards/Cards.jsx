import React from "react";
import { Grid } from "@material-ui/core";

import SingleCard from "./SingleCard/SingleCard";
import useStyles from "./styles";

const Cards = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.mainContainer}
      alignItems="stretch"
      spacing={3}
    >
      <Grid item xs={12} sm={6} md={6}>
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </Grid>
    </Grid>
  );
};

export default Cards;
