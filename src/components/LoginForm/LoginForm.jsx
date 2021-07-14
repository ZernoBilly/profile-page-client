import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import dotenv from "dotenv";

import useStyles from "./styles";

const LoginForm = ({
  isSignup,
  setSignup,
  loginForm,
  handleLoginFormClose,
}) => {
  const classes = useStyles();
  dotenv.config();

  const adminUser = {
    username: process.env.REACT_APP_USERNAME,
    password: process.env.REACT_APP_PASSWORD,
  };

  const initialState = { username: "", password: "" };

  const [form, setForm] = useState(initialState);

  //Form text field update handler
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  //Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.username === adminUser.username &&
      form.password === adminUser.password
    ) {
      setSignup(true);
    }
  };

  return (
    <Dialog
      open={loginForm}
      onClose={handleLoginFormClose}
      classes={{ paper: classes.loginForm }}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title" className={classes.title}>
          Login
        </DialogTitle>
        <DialogContent>
          <TextField
            onChange={handleChange}
            autoFocus
            margin="dense"
            id="username"
            label="Username"
            type="username"
            name="username"
            fullWidth
          />
          <TextField
            onChange={handleChange}
            margin="dense"
            id="password"
            label="Password"
            type="password"
            name="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions className={classes.buttonContainer}>
          <Button onClick={handleLoginFormClose} className={classes.buttons}>
            Cancel
          </Button>
          <Button
            type="submit"
            onClick={handleLoginFormClose}
            className={classes.buttons}
          >
            Login
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default LoginForm;
