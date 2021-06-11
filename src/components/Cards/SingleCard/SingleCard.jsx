import React from "react";
import {
  Card,
  Typography,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Button,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";

import moment from "moment";
import { useDispatch } from "react-redux";

//Action to Delete button
import { deleteCard } from "../../../actions/cards";

import useStyles from "./styles";

const SingleCard = ({ card, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardHeader
        className={classes.header}
        action={
          <Button onClick={() => setCurrentId(card._id)}>
            <EditOutlinedIcon />
          </Button>
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
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardActions className={classes.buttons}>
        <Button size="small" onClick={() => dispatch(deleteCard(card._id))}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default SingleCard;
