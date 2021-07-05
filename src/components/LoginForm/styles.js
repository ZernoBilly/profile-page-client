import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  loginForm: {
    backgroundColor: theme.palette.secondary.extraLight,
  },
  title: {
    color: theme.palette.primary.dark,
  },
  buttonContainer: {
    justifyContent: "space-between",
  },
  buttons: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.success.main,
    borderRadius: "8rem",
  },
}));
