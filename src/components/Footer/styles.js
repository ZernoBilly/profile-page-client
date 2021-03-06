import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainBox: {
    backgroundColor: theme.palette.primary.dark,
  },
  gridContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  topBox: {
    borderColor: theme.palette.optional.light,
  },
  iconButtons: {
    color: theme.palette.optional.main,
    margin: "0 0.4rem 0 0.4rem",
    transition: "background-color 0.3s, color 0.3s",

    "&:hover": {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.primary.main,
    },
  },
  copyrigthTitle: {
    marginTop: "0.5rem",
    color: theme.palette.secondary.dark,
  },
  copyrigthText: {
    color: theme.palette.secondary.dark,
  },
  copyrigthIcon: {
    color: theme.palette.secondary.dark,
  },
}));
