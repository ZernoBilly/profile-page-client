import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid, Container, Grow, Button, Dialog } from "@material-ui/core";

import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import { getCards } from "../../actions/cards";
import useStyles from "./styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setFormOpen] = useState(false);

  const handleClickOpen = () => {
    setFormOpen(true);
  };

  const handleClose = () => {
    setFormOpen(false);
  };

  useEffect(() => {
    dispatch(getCards());
  }, [currentId, dispatch]);

  return (
    <Container MaxWidth="lg">
      <Grow in>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={1}
        >
          <Grid item xs={12} sm={12}>
            <Cards setCurrentId={setCurrentId} setFormOpen={setFormOpen} />
          </Grid>
          <Grid item>
            <Button onClick={handleClickOpen}>Add New</Button>
          </Grid>
        </Grid>
      </Grow>
      <Grid container justify="space-between" alignItems="stretch" spacing={1}>
        <Grid item xs={12} sm={12}>
          <Dialog open={open} onClose={handleClose}>
            <Form
              currentId={currentId}
              setCurrentId={setCurrentId}
              setFormOpen={setFormOpen}
            />
          </Dialog>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

//<Grid item xs={12} sm={4}>
//<Form currentId={currentId} setCurrentId={setCurrentId} />