import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import moment from "moment";
import { useDispatch } from "react-redux";

//Action to Delete button
import { deleteCard } from "../../../actions/cards";

import useStyles from "./styles";

const SingleCard = ({ card, setCurrentId, setFormOpen }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  //Menu items state
  const [anchorEl, setAnchorEl] = useState(null);

  //Header menu open
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  //Header menu close
  const handleClose = () => {
    setAnchorEl(null);
  };

  //Form open
  const handleClickOpen = () => {
    setFormOpen(true);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        action={
          <div>
            <IconButton onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem
                onClick={() => {
                  setCurrentId(card._id);
                  handleClickOpen();
                  handleClose();
                }}
              >
                <EditOutlinedIcon />
              </MenuItem>
              <MenuItem
                //onClick={handleClose}
                onClick={() => {
                  dispatch(deleteCard(card._id));
                  handleClose();
                }}
              >
                <DeleteForeverOutlinedIcon />
              </MenuItem>
            </Menu>
          </div>
        }
        title={card.title}
        subheader={moment(card.date).fromNow()}
      />
      <CardMedia
        className={classes.media}
        image={card.selectedFile}
        title={card.title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {card.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttons}>
        <Button size="small" href={card.url} target="_blank">
          Learn More
        </Button>
        <Button size="small" href={card.gitHub} target="_blank">
          Source Code
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
