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
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#CCCCCC", // Цвет по умолчанию
          "&.Mui-checked": {
            color: "#007BFF", // Цвет при выборе
          },
          "& .MuiSvgIcon-root": {
            fontSize: "28px", // Увеличиваем размер иконки
          },
        },
      },
      defaultProps: {
        disableRipple: true, // Убираем ripple-эффект
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: "0px", // Отступ слева
          marginBottom: "5px", // Отступ снизу
          alignItems: "center", // Центрирование
        },
        label: {
          color: "#7a7a7a", // Цвет текста лейбла
          fontSize: "1rem", // Размер шрифта
          fontWeight: "600", // Жирность шрифта
        },
      },
    },
  },
});

export default lightTheme;
