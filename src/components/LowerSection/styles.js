import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  lowerSectionContainer: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "2rem",
  },
  upButton: {
    color: theme.palette.optional.main,
  },
  scrollText: {
    color: theme.palette.optional.light,
  },
}));
