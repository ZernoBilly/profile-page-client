import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  card: {
    borderRadius: "0.3rem",
    marginBottom: "1rem",
    backgroundColor: theme.palette.primary.main,
  },
  titleBox: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    borderColor: theme.palette.optional.main,
    marginBottom: "1rem",
    fontFamily: "Squada One",
  },
  titleText: {
    color: theme.palette.secondary.main,
    fontFamily: "Squada One",
    fontSize: "2rem",
  },

  skillText: {
    fontSize: "1.2rem",
  },

  skills: {
    color: theme.palette.secondary.main,
    "& .MuiLinearProgress-colorPrimary": {
      backgroundColor: theme.palette.primary.dark,
    },
    "& .MuiLinearProgress-barColorPrimary": {
      backgroundColor: theme.palette.optional.light,
    },
  },
  progressBar: {
    color: theme.palette.secondary.light,
  },
}));
