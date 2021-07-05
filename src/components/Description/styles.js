import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "5rem 0 5rem 0",
  },
  descriptionText: {
    marginTop: "3rem",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoGridItem: {
    borderBottom: "2px solid",
  },
  logos: {
    margin: "2rem",
    height: "5rem",
    width: "5rem",
    color: theme.palette.optional.dark,
  },
}));
