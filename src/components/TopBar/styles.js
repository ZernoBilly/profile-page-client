import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  AppBar: {
    margin: "0",
    padding: "0",
    backgroundColor: theme.palette.primary.dark,
  },
  titleLink: {
    flexGrow: 1,
    textDecoration: "none",

    textAlign: "center",
  },
  title: {
    color: theme.palette.optional.main,
    fontFamily: "Arizonia",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.optional.main,
    fontFamily: "Poiret One",
  },
  loginButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.optional.main,
    fontFamily: "Squada One",
    fontSize: "1.3rem",
  },
}));
