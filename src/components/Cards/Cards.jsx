import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import SingleCard from "./SingleCard/SingleCard";
import useStyles from "./styles";

const Cards = ({ setCurrentId, setFormOpen }) => {
  const cards = useSelector((state) => state.cards); //Fetch data from all cards
  const classes = useStyles();

  console.log(cards);

  return !cards.length ? (
    <CircularProgress />
  ) : (
    <Grid
      container
      MaxWidth="lg"
      className={classes.container}
      alignItems="stretch"
      spacing={3}
    >
      {cards.map((card) => (
        <Grid item key={card._id} xs={12} sm={4} md={4}>
          <SingleCard
            card={card}
            setCurrentId={setCurrentId}
            setFormOpen={setFormOpen}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
