import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";

import useStyles from "./styles";

const LoginForm = ({ loginForm, handleLoginFormClose }) => {
  const classes = useStyles();

  const isSignup = false;

  const handleSubmit = () => {};

  return (
    <Dialog open={loginForm} onClose={handleLoginFormClose}>
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="username"
            fullWidth
          />
          <TextField
            margin="dense"
            id="name"
            label="Password"
            type="password"
            fullWidth
          />
        </DialogContent>
        <DialogActions className={classes.buttons}>
          <Button onClick={handleLoginFormClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleLoginFormClose} color="primary">
            Login
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default LoginForm;
