import { Paper, TextField, Button, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createCard, updateCard } from "../../actions/cards";

const Form = ({ currentId, setCurrentId }) => {
  const [cardData, setCardData] = useState({
    title: "",
    description: "",
    selectedFile: "",
  });
  //Fetch data from updated post
  const card = useSelector((state) =>
    currentId ? state.cards.find((c) => c._id === currentId) : null
  );

  const classes = useStyles();
  const dispatch = useDispatch();

  //Populates the Form data fields
  useEffect(() => {
    if (card) setCardData(card);
  }, [card]);

  //Submit Form input field
  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateCard(currentId, cardData));
    } else {
      dispatch(createCard(cardData));
    }
    clear();
  };

  //Clear input fiels
  const clear = () => {
    setCurrentId(null);
    setCardData({ title: "", description: "", selectedFile: "" });
  };

  return (
    <Paper className={classes.paper}>
      <form
        className={classes.form}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Edit" : "Create new"} Project
        </Typography>
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
