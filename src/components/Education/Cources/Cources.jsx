import React from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./styles";

const Cources = ({ school, cources }) => {
  const classes = useStyles();

  return (
    <Accordion className={classes.accordion}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.titleText}>{school}</Typography>
      </AccordionSummary>
      {cources.map((c) => (
        <AccordionDetails className={classes.courceText}>
          {c.name}, {c.op} ECTS
        </AccordionDetails>
      ))}
    </Accordion>
  );
};

export default Cources;
