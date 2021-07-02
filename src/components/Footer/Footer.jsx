import React from "react";
import {
  Grid,
  Container,
  Box,
  Link,
  IconButton,
  Typography,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import CopyrightIcon from "@material-ui/icons/Copyright";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Box className={classes.mainBox}>
        <Container>
          <Grid container spacing={2} className={classes.gridContainer}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1} className={classes.topBox}>
                <IconButton
                  className={classes.iconButtons}
                  href="https://github.com/ZernoBilly"
                  target="_blank"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  className={classes.iconButtons}
                  href="https://linkedin.com/in/heikki-kurppa"
                  target="_blank"
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
              <Box>
                <Typography
                  variant="subtitle2"
                  className={classes.copyrigthTitle}
                >
                  HEIKKI KURPPA
                </Typography>
              </Box>
              <Box>
                <CopyrightIcon className={classes.copyrigthIcon} />
              </Box>
              <Box>
                <Typography variant="caption" className={classes.copyrigthText}>
                  Copyright 2021
                </Typography>
                <Typography variant="caption" className={classes.copyrigthText}>
                  , All Rights Reserved
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
