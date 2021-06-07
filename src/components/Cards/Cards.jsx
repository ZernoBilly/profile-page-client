import React from "react";
import { Grid } from "@material-ui/core";

import SingleCard from "./SingleCard/SingleCard";

const Cards = () => {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12} sm={4}>
        <SingleCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SingleCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SingleCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SingleCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SingleCard />
      </Grid>
      <Grid item xs={12} sm={4}>
        <SingleCard />
      </Grid>
    </Grid>
  );
};

export default Cards;
