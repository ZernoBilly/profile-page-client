import { blue, red } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
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
    backgroundColor: "#FAF0DC",
  },
  header: {
    marginLeft: "8%",
    textAlign: "center",
  },
  buttons: {
    justifyContent: "space-between",
    color: "#1BA098",
  },
  menu: {
    color: "#1BA098",
  },
  menuButton: {},
});
