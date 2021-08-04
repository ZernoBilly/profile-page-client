import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  accordion: {
    width: "80%",
    flexDirection: "column",
    backgroundColor: theme.palette.optional.main,
  },
  titleText: {
    color: theme.palette.primary.dark,
    fontFamily: "Squada One",
    fontSize: "1.3rem",
  },
  courceText: {
    color: theme.palette.primary.ligth,
    fontFamily: "Squada One",
  },
}));
