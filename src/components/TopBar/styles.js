import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  AppBar: {
    borderRadius: "15px",
  },
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  createButton: {
    marginRight: theme.spacing(2),
  },
  loginButton: {
    marginRight: theme.spacing(2),
  },
}));
