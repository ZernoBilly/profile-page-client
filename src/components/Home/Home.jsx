import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  Container,
  Grow,
  Button,
  Dialog,
  Typography,
} from "@material-ui/core";
import Image from "material-ui-image";

import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import { getCards } from "../../actions/cards";
import useStyles from "./styles";
import titleImage from "../../images/titlepic1.jpg";

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
          <Grid item xs={12} sm={12} lg={12}>
            <div className={classes.titleImage}>
              <Image src={titleImage} aspectRatio="1/1.3" cover="true"></Image>
              <Typography>Otsikko</Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} className={classes.cards}>
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
