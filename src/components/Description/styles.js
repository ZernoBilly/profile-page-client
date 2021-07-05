import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    margin: "5rem 0 5rem 0",
  },
  descriptionTextGridItem: {
    marginTop: "0.5rem",
  },
  descriptionText: {
    fontFamily: "Poiret One",
    color: theme.palette.secondary.light,
    margin: "0.5rem",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  logoBox: {
    borderColor: theme.palette.secondary.dark,
  },
  logos: {
    margin: "2rem",
    height: "5rem",
    width: "5rem",
    color: theme.palette.optional.dark,
  },
}));
