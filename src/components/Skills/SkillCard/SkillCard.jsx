import React from "react";
import {
  Card,
  CardContent,
  Box,
  Typography,
  LinearProgress,
} from "@material-ui/core";

import useStyles from "./styles";

const SkillCard = ({ title, skills }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Box className={classes.titleBox} borderBottom={1}>
          <Typography variant="h5" className={classes.titleText}>
            {title}
          </Typography>
        </Box>
        <div className={classes.skills}>
          {skills.map((sk) => (
            <Typography className={classes.skillText}>
              {sk.skill}
              <LinearProgress
                color="primary"
                className={classes.progressBar}
                variant="determinate"
                value={sk.progress}
              />{" "}
            </Typography>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
