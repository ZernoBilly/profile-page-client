import React from "react";
import { Grid } from "@material-ui/core";

import AboutMeCard from "./AboutMeCard/AboutMeCard";

import useStyles from "./styles";

const AboutMeCards = () => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} md={4} lg={4}>
        <AboutMeCard />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <AboutMeCard />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <AboutMeCard />
      </Grid>
    </Grid>
  );
};

export default AboutMeCards;
