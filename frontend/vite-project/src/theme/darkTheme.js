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
    text: {
      title: "#FFFFFF",
      text: "#DDDDDD",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#5A5A6E",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#5A5A6E", // Более темный цвет на hover
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: "8px 0", // Отступы между инпутами
          "& .MuiInputBase-root": {
            backgroundColor: "#3A3A4D", // Цвет фона инпута
            color: "#FFFFFF", // Цвет текста
          },
          "& .MuiOutlinedInput-root": {
            borderColor: "#555555", // Цвет рамки
            "&:hover fieldset": {
              borderColor: "#555555", // Цвет рамки при наведении
            },
            "&.Mui-focused fieldset": {
              borderColor: "#555555", // Цвет рамки в фокусе
            },
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#777777", // Цвет по умолчанию
          "&.Mui-checked": {
            color: "#4F8CFF", // Цвет при выборе
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
          color: "#bebebe", // Цвет текста лейбла
          fontSize: "1rem", // Размер шрифта
          fontWeight: "600", // Жирность шрифта
        },
      },
    },
  },
});

export default darkTheme;
