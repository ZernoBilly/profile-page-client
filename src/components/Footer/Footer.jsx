import React from "react";
import { Grid, Container, Box, Link } from "@material-ui/core";

import useStyles from "./styles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <Box bgcolor="text.secondary" color="white">
        <Container>
          <Grid container spacing={5} className={classes.gridContainer}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}></Box>
              <Box>
                <Link hfer="/">Contact</Link>
              </Box>
              <Box>
                <Link hfer="/">Contact</Link>
              </Box>
              <Box>
                <Link hfer="/">Contact</Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
