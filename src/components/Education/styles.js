import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  educationContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.primary.dark,
    marginBottom: "10rem",
  },
  titleBox: {
    display: "flex",
    justifyContent: "center",
    borderColor: theme.palette.optional.main,
    width: "57%",
    marginBottom: "1.5rem",
  },

  title: {
    display: "flex",
    justifyContent: "center",
  },
  titleText: {
    fontFamily: "Poiret One",
    color: theme.palette.secondary.main,
    fontSize: "2.5rem",
    fontWeight: "550",
  },
  educationItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  courcesTitle: {
    fontFamily: "Squada One",
    fontSize: "1.7rem",
    color: theme.palette.secondary.main,
  },
  courcesItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "2rem",
    marginBottom: "3rem",
  },
  imageItem: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    color: theme.palette.primary.dark,
    height: "6rem",
    width: "6rem",
    borderRadius: "0.3rem",
    border: "2px solid",
    borderColor: theme.palette.optional.light,
    opacity: "0.9",
    transition: "opacity 0.3s, borderColor 0.3s",

    "&:hover": {
      opacity: "0.5",
      borderColor: theme.palette.optional.dark,
    },
  },
}));
