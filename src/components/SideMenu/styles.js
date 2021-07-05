import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  drawer: {
    backgroundColor: theme.palette.secondary.extraLight,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  listItemText: {
    color: theme.palette.primary.dark,
  },
  drawerIcons: {
    color: theme.palette.optional.dark,
  },
}));
