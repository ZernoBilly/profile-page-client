import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "0.3rem",
    position: "relative",
    backgroundColor: theme.palette.secondary.extraLight,
  },
  header: {
    marginLeft: "8%",
    textAlign: "center",
    color: theme.palette.primary.dark,
  },
  buttonContainer: {
    justifyContent: "space-between",
    margin: "0.3rem",
  },
  actionButtons: {
    borderRadius: "8rem",
    color: theme.palette.secondary.light,
    backgroundColor: theme.palette.primary.main,

    "&:hover": {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.primary.main,
    },
  },
  menu: {
    color: "#1BA098",
  },
  menuButton: {},
}));
