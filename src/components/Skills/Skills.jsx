import React from "react";
import { Grid, Typography } from "@material-ui/core";

import SkillCard from "./SkillCard/SkillCard";

import useStyles from "./styles";

const skills = [
  {
    title: "Frontend",
    skills: [
      {
        skill: "JavaScript",
        progress: 85,
      },
      {
        skill: "React",
        progress: 80,
      },
      {
        skill: "Material Ui",
        progress: 80,
      },
      {
        skill: "HTML5 & CSS",
        progress: 70,
      },
      {
        skill: "TypeScript",
        progress: 30,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        skill: "Node.js",
        progress: 70,
      },
      {
        skill: "Express.js",
        progress: 60,
      },

      {
        skill: "MongoDB",
        progress: 60,
      },
      {
        skill: "TypeScript",
        progress: 30,
      },
    ],
  },
  {
    title: "Deploy",
    skills: [
      {
        skill: "Ubuntu Linux",
        progress: 60,
      },

      {
        skill: "AWS EC2",
        progress: 40,
      },
      {
        skill: "Hostinger VPS",
        progress: 50,
      },
      {
        skill: "Nginx",
        progress: 60,
      },
      {
        skill: "Apache",
        progress: 30,
      },
    ],
  },
];

const Skills = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.skillsContainer}>
      <Grid item xs={12} className={classes.header}>
        <Typography className={classes.headerText} variant="h4">
          Leveling Up
        </Typography>
      </Grid>
      {skills.map((sc) => (
        <Grid item xs={12} sm={3}>
          <SkillCard key={sc.title} title={sc.title} skills={sc.skills} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Skills;
