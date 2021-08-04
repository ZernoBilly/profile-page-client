import React from "react";
import { Container } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";

import useStyles from "./styles";
import theme from "./theme";

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container maxWidth="xl" className={classes.root}>
          <Switch>
            <Route path="/" exact component={Home} />
          </Switch>
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
