import React from "react";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";

import SingleCard from "./SingleCard/SingleCard";
import useStyles from "./styles";

const Cards = () => {
  const cards = useSelector((state) => state.cards);
  const classes = useStyles();

  console.log(cards);

  return (
    <Grid item xs={12} sm={6} md={6}>
      <SingleCard />
      <SingleCard />
      <SingleCard />
    </Grid>
  );
};

export default Cards;
