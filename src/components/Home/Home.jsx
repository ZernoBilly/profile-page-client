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

import TopBar from "../TopBar/TopBar";
import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import Description from "../Description/Description";

import { getCards } from "../../actions/cards";
import useStyles from "./styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  //Form open handler
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

  //Side menu toggle handler
  const [sideMenuOpen, setSidemenuOpen] = useState(false);

  const toggleSideMenu = (open) => (event) => {
    setSidemenuOpen(open);
  };

  return (
    <div className={classes.root}>
      <TopBar toggleSideMenu={toggleSideMenu} />
      <SideMenu toggleSideMenu={toggleSideMenu} sideMenuOpen={sideMenuOpen} />
      <Container MaxWidth="lg">
        <Header />
        <Description />
        <Grow in>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={1}
          >
            <Grid item xs={12} sm={12} className={classes.cards}>
              <Cards setCurrentId={setCurrentId} setFormOpen={setFormOpen} />
            </Grid>
            <Grid item>
              <Button onClick={handleClickOpen}>Add New</Button>
            </Grid>
          </Grid>
        </Grow>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={1}
        >
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
    </div>
  );
};

export default Home;

//<Grid item xs={12} sm={4}>
//<Form currentId={currentId} setCurrentId={setCurrentId} />
