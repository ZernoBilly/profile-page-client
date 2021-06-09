import { Paper, TextField, Button, Typography } from "@material-ui/core";
import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { createCard } from "../../actions/cards";

const Form = () => {
  const [cardData, setCardData] = useState({
    title: "",
    description: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createCard(cardData));
  };

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        className={classes.form}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Create new Project</Typography>
        <TextField
          name="title"
          fullWidth
          label="Title"
          value={cardData.title}
          onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
        />
        <TextField
          name="description"
          fullWidth
          label="Description"
          value={cardData.description}
          onChange={(e) =>
            setCardData({ ...cardData, description: e.target.value })
          }
        />

        <div>
          <FileBase
            type="file"
            multible={false}
            onDone={({ base64 }) =>
              setCardData({ ...cardData, selectedFile: base64 })
            }
          />
        </div>
        <Button variant="contained" type="submit" fullWidth>
          Submit
        </Button>
        <Button variant="contained" onClick={clear} fullWidth>
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
