import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid, Container, Grow } from "@material-ui/core";

import TopBar from "../TopBar/TopBar";
import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import LowerSection from "../LowerSection/LowerSection";
import Description from "../Description/Description";
import LoginForm from "../LoginForm/LoginForm";
import Footer from "../Footer/Footer";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";

import { getCards } from "../../actions/cards";
import useStyles from "./styles";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  //Login
  const [isSignup, setSignup] = useState(false);

  //Login form open handler
  const [loginForm, setLoginFormOpen] = useState(false);

  const handleLoginFormOpen = () => {
    setLoginFormOpen(true);
  };

  const handleLoginFormClose = () => {
    setLoginFormOpen(false);
  };

  //Form open handler
  const [open, setFormOpen] = useState(false);

  const handleClickOpen = () => {
    setFormOpen(true);
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
      <TopBar
        toggleSideMenu={toggleSideMenu}
        handleLoginFormOpen={handleLoginFormOpen}
        isSignup={isSignup}
        setSignup={setSignup}
      />
      <SideMenu
        toggleSideMenu={toggleSideMenu}
        sideMenuOpen={sideMenuOpen}
        handleClickOpen={handleClickOpen}
        isSignup={isSignup}
      />
      <Container MaxWidth="lg">
        <Header />

        <Grow in>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={1}
          >
            <Description />
            <Grid item xs={12} sm={12} className={classes.cards}>
              <Cards
                setCurrentId={setCurrentId}
                setFormOpen={setFormOpen}
                isSignup={isSignup}
              />
            </Grid>
          </Grid>
        </Grow>
      </Container>
      <Skills />
      <Education />
      <LowerSection />

      <LoginForm
        isSignup={isSignup}
        setSignup={setSignup}
        loginForm={loginForm}
        handleLoginFormClose={handleLoginFormClose}
      />
      <Form
        currentId={currentId}
        setCurrentId={setCurrentId}
        open={open}
        setFormOpen={setFormOpen}
      />
      <Footer />
    </div>
  );
};

export default Home;
