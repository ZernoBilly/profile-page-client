import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

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
        progress: 85,
      },
      {
        skill: "Material Ui",
        progress: 80,
      },
      {
        skill: "HTML5 & CSS",
        progress: 80,
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
        progress: 40,
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
        progress: 20,
      },
      {
        skill: "Hostinger VPS",
        progress: 80,
      },
      {
        skill: "Nginx",
        progress: 80,
      },
      {
        skill: "Apache",
        progress: 10,
      },
    ],
  },
];

const Skills = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.skillsContainer} id="skills">
      <Grid item xs={12} className={classes.header}>
        <Box className={classes.titleBox} borderBottom={1}>
          <Typography className={classes.headerText} variant="h4">
            Leveling Up
          </Typography>
        </Box>
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
