import React from "react";
import { Grid } from "@material-ui/core";

import TopBar from "./components/TopBar/TopBar";
import Cards from "./components/Cards/Cards";

import useStyles from "./styles";

function App() {
  const classes = useStyles();

  return (
    <div clasName={classes.root}>
      <Grid container direction="column">
        <Grid item>
          <TopBar />
        </Grid>
        <Grid item container justify="center">
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Cards />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
