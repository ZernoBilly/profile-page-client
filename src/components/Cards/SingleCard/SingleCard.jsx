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
  Tooltip,
  Fade,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import GitHubIcon from "@material-ui/icons/GitHub";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteCard } from "../../../actions/cards";

import useStyles from "./styles";

const SingleCard = ({ card, setCurrentId, setFormOpen, checked, isSignup }) => {
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
    <Fade
      in={checked}
      {...(checked ? { timeout: 200 } : {})}
      collapsedHeight={50}
    >
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          action={
            <div>
              <IconButton onClick={handleClick} disabled={!isSignup}>
                <MoreVertIcon />
              </IconButton>
              <Menu
                className={classes.menu}
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  className={classes.menuButton}
                  onClick={() => {
                    setCurrentId(card._id);
                    handleClickOpen();
                    handleClose();
                  }}
                >
                  <EditOutlinedIcon />
                </MenuItem>
                <MenuItem
                  className={classes.menuButton}
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
        <CardActions className={classes.buttonContainer}>
          <Tooltip title="Try Now" placement="right">
            <Button
              variant="contained"
              className={classes.actionButtons}
              href={card.url}
              target="_blank"
            >
              <PlayCircleFilledIcon />
            </Button>
          </Tooltip>
          <Tooltip title="GitHub" placement="left">
            <Button
              variant="contained"
              className={classes.actionButtons}
              href={card.gitHub}
              target="_blank"
            >
              <GitHubIcon />
            </Button>
          </Tooltip>
        </CardActions>
      </Card>
    </Fade>
  );
};

export default SingleCard;
