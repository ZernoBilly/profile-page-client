import React from "react";
import { Grid } from "@material-ui/core";

import EducationCard from "./EducationCard/EducationCard";

import useStyles from "./styles";

const AboutMeCards = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.cardsContainer}
      spacing={3}
      maxWidth="lg"
    >
      <Grid item xs={12} md={4} lg={4}>
        <EducationCard />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        Web
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        internet
      </Grid>
    </Grid>
  );
};

export default AboutMeCards;
