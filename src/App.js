import React from "react";
import { Container } from "@material-ui/core";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import TopBar from "./components/TopBar/TopBar";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";

import useStyles from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <TopBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/form" component={Form} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
