import React from "react";
import { Grid, Container, Grow } from "@material-ui/core";

import TopBar from "./components/TopBar/TopBar";
import Cards from "./components/Cards/Cards";

import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <TopBar />
      <Grow in>
        <Container className="gridContainer">
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Cards />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
