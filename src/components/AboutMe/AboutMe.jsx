import React from "react";
import { Grid, Container } from "@material-ui/core";

import AboutMeCards from "../AboutMeCards/AboutMeCards";
import AboutMeHeader from "../AboutMeHeader/AboutMeHeader";

import useStyles from "./styles";

const AboutMe = () => {
  const classes = useStyles();

  return (
    <Container className={classes.rootContainer} MaxWidth="lg">
      <Grid container className={classes.mainContainer} MaxWidth="lg">
        <AboutMeHeader />
        <AboutMeCards />
      </Grid>
    </Container>
  );
};

export default AboutMe;
