import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import SingleCard from "./SingleCard/SingleCard";
import useStyles from "./styles";

const Cards = ({ setCurrentId }) => {
  const cards = useSelector((state) => state.cards);
  const classes = useStyles();

  console.log(cards);

  return !cards.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {cards.map((card) => (
        <Grid key={card._id} item xs={12} sm={6} md={6}>
          <SingleCard card={card} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
