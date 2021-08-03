import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  skillsContainer: {
    marginTop: "15rem",
    marginBottom: "10rem",
    paddingBottom: "1.2rem",
    backgroundColor: theme.palette.optional.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    textAlign: "center",
  },
  headerText: {
    marginTop: "0.7rem",
    fontFamily: "Poiret One",
    color: theme.palette.primary.main,
    fontSize: "2.5rem",
    fontWeight: "800",
  },
}));
