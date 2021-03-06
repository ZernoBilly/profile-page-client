import {
  TextField,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Dialog,
} from "@material-ui/core";
import ClearOutlinedIcon from "@material-ui/icons/ClearOutlined";
import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";

import useStyles from "./styles";
import { createCard, updateCard } from "../../actions/cards";

const Form = ({ currentId, setCurrentId, open, setFormOpen }) => {
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
    setCardData({
      title: "",
      description: "",
      selectedFile: "",
      url: "",
      gitHub: "",
    });
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <form
        className={classes.form}
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <DialogTitle className={classes.title} variant="h6">
          {currentId ? "Edit" : "Create new"} Project
        </DialogTitle>
        <DialogActions className={classes.titleButton}>
          <IconButton
            className={classes.exitButton}
            onClick={() => {
              handleClose();
              clear();
            }}
          >
            <ClearOutlinedIcon fontSize="small" />
          </IconButton>
        </DialogActions>

        <DialogContent dividers>
          <TextField
            autoFocus
            className={classes.textField}
            name="title"
            fullWidth
            variant="filled"
            label="Title"
            value={cardData.title}
            onChange={(e) =>
              setCardData({ ...cardData, title: e.target.value })
            }
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
            name="url"
            fullWidth
            variant="filled"
            label="Project URL"
            value={cardData.url}
            onChange={(e) => setCardData({ ...cardData, url: e.target.value })}
          />
          <TextField
            className={classes.textField}
            name="gitHub"
            fullWidth
            variant="filled"
            label="GitHub repository"
            value={cardData.gitHub}
            onChange={(e) =>
              setCardData({ ...cardData, gitHub: e.target.value })
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
        <DialogActions className={classes.buttons}>
          <Button variant="contained" onClick={clear}>
            Clear
          </Button>
          <Button variant="contained" type="submit" onClick={handleClose}>
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default Form;
