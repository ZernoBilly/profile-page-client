import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#051622",
      dark: "#030f17",
      light: "#37444e",
    },
    secondary: {
      main: "#DEB992",
      dark: "#9b8166",
      light: "#e4c7a7",
      extraLight: "#fefae0",
    },
    optional: {
      main: "#1BA098",
      dark: "#12706a",
      light: "#48b3ac",
      extraDark: "#faedcd",
    },
    extra: {
      dirtyWhite: "#DEB992",
      vibrantBlue: "#2CCCC3",
      vibrantYellow: "#FACD3D",
      vibrantRed: "#E60576",
      vibrantPurple: "#5626C4",
    },
    success: {
      main: "#009688",
      dark: "#00695f",
      light: "#33ab9f",
    },
    info: {
      main: "#2CCCC3",
      dark: "#1e8e88",
      light: "#56d6cf",
    },
    warning: {
      main: "#E60576",
      dark: "#a10352",
      light: "#eb3791",
    },
  },

  typography: {
    fontFamily: ["Roboto", "Arizonia", "Poiret One", "Squada One"],
  },

  shape: {
    borderRadius: "2px",
  },

  probs: {
    MuiLinearProgress: {
      root: {
        barColorPrimary: {
          backgroundColor: "#48b3ac",
        },
      },
    },
  },
});

export default theme;

//#051622 #1BA098 #DEB992
//Dirty white #FAF0DC

//Dark
//#030f17
//#051622
//#37444e

//Orange
//#9b8166
//#DEB992
//#e4c7a7

//Blue
//#12706a
//#1BA098
//#48b3ac
//Dark #0c4e4a

//Optionals
//#2CCCC3 #FACD3D #5626C4 #E60576
