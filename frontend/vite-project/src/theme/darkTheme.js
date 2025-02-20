import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#DDDDDD",
    },
    background: {
      default: "#1E1E2F",
      paper: "#2C2C3A",
      header: "#454558",
    },
  },
});

export default darkTheme;
