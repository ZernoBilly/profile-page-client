import React from "react";
import { Grid, Container, Grow } from "@material-ui/core";

import TopBar from "./components/TopBar/TopBar";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form";

import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <TopBar />
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          flexDirection="row"
          spacing={1}
        >
          <Grid item xs={12} sm={6}>
            <Cards />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
