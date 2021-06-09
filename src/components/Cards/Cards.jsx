import React from "react";
import { Grid } from "@material-ui/core";

import SingleCard from "./SingleCard/SingleCard";
import useStyles from "./styles";

const Cards = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6}>
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </Grid>
  );
};

export default Cards;
