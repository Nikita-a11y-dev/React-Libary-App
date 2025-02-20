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
      header: "#eaeaea",
    },
    text: {
      title: "#333333",
      text: "#555555",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#6C757D",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#858E96", // Более темный цвет на hover
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "8px 0", // Отступы между инпутами
          "& .MuiInputBase-root": {
            backgroundColor: "#FFFFFF", // Цвет фона инпута
            color: "#333333", // Цвет текста
          },
          "& .MuiOutlinedInput-root": {
            borderColor: "#CCCCCC", // Цвет рамки
            "&:hover fieldset": {
              borderColor: "#333333", // Цвет рамки при наведении
            },
            "&.Mui-focused fieldset": {
              borderColor: "#CCCCCC", // Цвет рамки в фокусе
            },
          },
        },
      },
    },
  },
});

export default lightTheme;
