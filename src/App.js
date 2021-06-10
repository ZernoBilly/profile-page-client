import React, { useState, useEffect } from "react";
import { Grid, Container, Grow } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getCards } from "./actions/cards";
import TopBar from "./components/TopBar/TopBar";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Form";

import useStyles from "./styles";

function App() {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCards());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <TopBar />
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={1}
        >
          <Grid item xs={12} sm={6}>
            <Cards setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
}

export default App;
