import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  titleContainer: {
    paddingTop: "30vh",

    justifyContent: "center",
    textAlign: "center",
    height: "70vh",
  },
  title: {
    color: theme.palette.secondary.main,
    fontFamily: "Poiret One",
  },
  lowerTitle: {
    color: theme.palette.secondary.main,
  },
  coloredTitle: {
    color: theme.palette.optional.main,
  },
  downButton: {
    marginTop: "15rem",
    color: theme.palette.optional.main,
    width: "5rem",
  },
  downButtonIcon: {
    width: "5rem",
    fontSize: "10rem",
  },
}));
