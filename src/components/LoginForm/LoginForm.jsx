import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import useStyles from "./styles";

const LoginForm = ({
  isSignup,
  setSignup,
  loginForm,
  handleLoginFormClose,
}) => {
  const classes = useStyles();

  const adminUser = {
    username: "admin",
    password: "admin123",
  };

  const initialState = { username: "", password: "" };

  const [form, setForm] = useState(initialState);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.username == adminUser.username &&
      form.password == adminUser.password
    ) {
      setSignup(true);
    }
  };

  console.log(isSignup);

  return (
    <Dialog open={loginForm} onClose={handleLoginFormClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
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
        <DialogActions className={classes.buttons}>
          <Button onClick={handleLoginFormClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" onClick={handleLoginFormClose} color="primary">
            Login
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default LoginForm;
