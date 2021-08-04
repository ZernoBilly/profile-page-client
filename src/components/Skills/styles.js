import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  skillsContainer: {
    marginTop: "12rem",
    marginBottom: "10rem",
    paddingBottom: "1.2rem",
    backgroundColor: theme.palette.optional.dark,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  titleBox: {
    borderColor: theme.palette.secondary.main,
    width: "75%",
    marginBottom: "1.3rem",
  },
  header: {
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  headerText: {
    marginTop: "0.7rem",
    fontFamily: "Poiret One",
    color: theme.palette.primary.main,
    fontSize: "2.5rem",
    fontWeight: "800",
    marginBottom: "0.4rem",
  },
}));
