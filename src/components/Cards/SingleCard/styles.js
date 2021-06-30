import { blue, red } from "@material-ui/core/colors";
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
    borderRadius: "15px",
    position: "relative",
    backgroundColor: theme.palette.secondary.extraLight,
  },
  header: {
    marginLeft: "8%",
    textAlign: "center",
    color: theme.palette.primary.dark,
  },
  buttons: {
    justifyContent: "space-between",
    //color: theme.palette.info.main,
  },
  menu: {
    color: "#1BA098",
  },
  menuButton: {},
}));
