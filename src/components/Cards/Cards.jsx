import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, IconButton } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link as Scroll } from "react-scroll";

import SingleCard from "./SingleCard/SingleCard";
import useStyles from "./styles";
import useWindowPosition from "../../Hook/useWindowPosition";

const Cards = ({ setCurrentId, setFormOpen, isSignup }) => {
  const cards = useSelector((state) => state.cards); //Fetched data from all cards
  const classes = useStyles();

  //Window position function
  const checked = useWindowPosition("header");

  return !cards.length ? (
    <CircularProgress />
  ) : (
    <div className={classes.mainContainer}>
      <Grid
        container
        MaxWidth="lg"
        className={classes.container}
        alignItems="stretch"
        spacing={3}
        id="project-cards"
      >
        {cards.map((card) => (
          <Grid item key={card._id} xs={12} sm={4} md={4}>
            <SingleCard
              card={card}
              setCurrentId={setCurrentId}
              setFormOpen={setFormOpen}
              checked={checked}
              isSignup={isSignup}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.scrollIcon}>
        <Scroll to="skills" smooth={true}>
          <IconButton className={classes.downButton}>
            <ExpandMoreIcon />
          </IconButton>
        </Scroll>
      </div>
    </div>
  );
};

export default Cards;
