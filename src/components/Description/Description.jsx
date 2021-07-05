import React from "react";
import { Grid, Typography, Divider, Box } from "@material-ui/core";
import Image from "material-ui-image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextDotJs, SiDjango, SiMaterialUi, SiMongodb } from "react-icons/si";

import useStyles from "./styles";

import reactLogo from "./Logo-pictures/React-icon.svg.png";

const Description = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.gridContainer} id="description">
      <Grid
        item
        xs={12}
        sm={12}
        lg={12}
        className={classes.descriptionTextGridItem}
      >
        <Typography variant="h3" className={classes.descriptionText}>
          See my Projects
        </Typography>
        <Typography variant="h4" className={classes.descriptionText}>
          with modern
        </Typography>
        <Typography variant="h4" className={classes.descriptionText}>
          web-development technologies
        </Typography>
      </Grid>

      <Grid item xs={12} sm={12} className={classes.logoGridItem}>
        <Box className={classes.logoBox} borderBottom={1}>
          <FaReact className={classes.logos} title="React" />
          <FaNodeJs className={classes.logos} title="Node.js" />
          <SiNextDotJs className={classes.logos} title="Next.js" />
          <SiDjango className={classes.logos} title="Django" />
          <SiMaterialUi className={classes.logos} title="Material ui" />
          <SiMongodb className={classes.logos} title="Mongodb" />
        </Box>
      </Grid>
    </Grid>
  );
};
export default Description;
