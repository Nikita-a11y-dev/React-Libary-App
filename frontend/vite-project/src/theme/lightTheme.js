import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#555555",
    },
    background: {
      default: "#F9F9F9",
      paper: "#FFFFFF",
      header: "#d7d7d7",
    },
  },
});

export default lightTheme;
