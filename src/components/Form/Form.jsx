import { Paper, TextField, Button } from "@material-ui/core";
import React from "react";
import FileBase from "react-file-base64";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  return (
    <Paper>
      <form className={classes.form}>
        <TextField name="title" fullWidth label="Title" />
        <TextField name="description" fullWidth label="Description" />
        <div>
          <FileBase type="file" />
        </div>
        <Button variant="contained" type="submit" fullWidth>
          Submit
        </Button>
        <Button variant="contained" type="clear" fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
