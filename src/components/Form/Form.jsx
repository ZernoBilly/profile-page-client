import {
  TextField,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@material-ui/core";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createCard, updateCard } from "../../actions/cards";

const Form = ({ currentId, setCurrentId, setFormOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [cardData, setCardData] = useState({
    title: "",
    description: "",
    selectedFile: "",
  });
  //Fetch data from updated post
  const card = useSelector((state) =>
    currentId ? state.cards.find((c) => c._id === currentId) : null
  );

  //Handle Form open
  const handleClose = () => {
    setFormOpen(false);
  };

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
    <form
      className={classes.form}
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <DialogTitle className={classes.title} variant="h6">
        {currentId ? "Edit" : "Create new"} Project
      </DialogTitle>
      <DialogActions>
        <IconButton className={classes.exitButton} onClick={handleClose}>
          <ClearOutlinedIcon fontSize="small" />
        </IconButton>
      </DialogActions>

      <DialogContent dividers>
        <TextField
          className={classes.textField}
          name="title"
          fullWidth
          variant="filled"
          label="Title"
          value={cardData.title}
          onChange={(e) => setCardData({ ...cardData, title: e.target.value })}
        />
        <TextField
          className={classes.textField}
          name="description"
          fullWidth
          multiline
          placeholder
          variant="filled"
          label="Description"
          value={cardData.description}
          onChange={(e) =>
            setCardData({ ...cardData, description: e.target.value })
          }
        />
        <TextField
          className={classes.textField}
          name="linkToProject"
          fullWidth
          variant="filled"
          label="Project URL"
          value={cardData.description}
          onChange={(e) =>
            setCardData({ ...cardData, description: e.target.value })
          }
        />
        <TextField
          className={classes.textField}
          name="linkToGithub"
          fullWidth
          variant="filled"
          label="GitHub"
          value={cardData.description}
          onChange={(e) =>
            setCardData({ ...cardData, description: e.target.value })
          }
        />

        <div className={classes.fileSelector}>
          <FileBase
            type="file"
            multible={false}
            onDone={({ base64 }) =>
              setCardData({ ...cardData, selectedFile: base64 })
            }
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          type="submit"
          fullWidth
          onClick={handleClose}
        >
          Submit
        </Button>
        <Button variant="contained" onClick={clear} fullWidth>
          Clear
        </Button>
      </DialogActions>
    </form>
  );
};

export default Form;
