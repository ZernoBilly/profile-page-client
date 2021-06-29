import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  AppBar: {
    borderRadius: "15px",
    background: "none",
  },
  title: {
    flexGrow: 1,
    marginLeft: "20px",
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
