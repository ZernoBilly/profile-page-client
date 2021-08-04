import React from "react";

import { Grid, Typography, Link, Box } from "@material-ui/core";

import Cources from "./Cources/Cources";

import useStyles from "./styles";

import amkoodari from "../../images/amkoodari.png";
import hyria from "../../images/hyria.png";
import opintopolku from "../../images/opintopolku.png";

const Education = () => {
  const classes = useStyles();

  const onlineCourses = [
    {
      school: "Häme University of Applied Sciences, Hamk",
      cources: [
        {
          name: "IoT, Microcontrollers",
          op: 5,
        },
        {
          name: "Web-ohjelmointi",
          op: 5,
        },
        {
          name: "www-sivuston käyttöliittymä",
          op: 5,
        },
        {
          name: "IoT, Arkkitehtuurit",
          op: 2,
        },
        {
          name: "IoT, Antureiden tekniikka ja suorituskyky",
          op: 3,
        },
        {
          name: "Tietokannat",
          op: 3,
        },
      ],
    },
    {
      school: "South-Eastern Finland University of Applied Sciences",
      cources: [
        {
          name: "Data-analytiikan perusteet, Excel",
          op: 5,
        },
        {
          name: "Ohjelmoinnin perusteet, JavaScript",
          op: 5,
        },
      ],
    },
    {
      school: "Open University of Helsinki",
      cources: [
        {
          name: "Ohjelmoinnin perusteet, Java",
          op: 5,
        },
        {
          name: "Full Stack open 2021",
          op: 0,
        },
      ],
    },
  ];

  return (
    <Grid container className={classes.educationContainer} spacing={2}>
      <Grid item xs={12} className={classes.title}>
        <Box className={classes.titleBox} borderBottom={1}>
          <Typography className={classes.titleText}>Education</Typography>
        </Box>
      </Grid>

      <Grid
        item
        container
        xs={12}
        className={classes.educationItem}
        spacing={2}
      >
        <Grid item xs={3} className={classes.imageItem}>
          <Link
            className={classes.link}
            href="https://openbadgepassport.com/app/badge/info/376464"
            target="_blank"
            title="Mark of Competence"
          >
            <img
              src={amkoodari}
              className={classes.image}
              alt="Mark of Competence"
            />
          </Link>
        </Grid>
        <Grid item xs={3} className={classes.imageItem}>
          <Link
            href="https://www.hyria.fi/koulutukset/hae_jatkuvassa_haussa/koulutustarjonta/tieto-_ja_viestintatekniikka"
            target="_blank"
            title="Tieto- ja Viestintätekniikka"
          >
            <img
              src={hyria}
              className={classes.image}
              alt="Tieto- ja Viestintätekniikka"
            />
          </Link>
        </Grid>
        <Grid item xs={3} className={classes.imageItem}>
          <Link
            href="https://opintopolku.fi/koski/opinnot/2a6de1cfcb604ec8a26058263e7c4a0d"
            target="_blank"
            title="Oma Opintopolku"
          >
            <img
              src={opintopolku}
              className={classes.image}
              alt="Oma Opintopolku"
            />
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6} className={classes.courcesItem}>
        <Typography className={classes.courcesTitle}>
          Completed Online Cources
        </Typography>
        {onlineCourses.map((c) => (
          <Cources key={c.school} school={c.school} cources={c.cources} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Education;
