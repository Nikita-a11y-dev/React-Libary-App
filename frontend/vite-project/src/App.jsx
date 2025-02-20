import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import Filter from "./components/Filter/Filter";
import Error from "./components/Error/Error";
import "./App.css";
import { useState } from "react";

import { ThemeProvider } from "@mui/material/styles";
import { Typography, Button, Box, Container } from "@mui/material";

import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";
import CustomizedSwitches from "./components/CustomizedSwitches";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = (event) => {
    setDarkMode(event.target.checked);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100vh",
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          px={2}
          sx={{
            backgroundColor: "background.header",
            pt: 1,
            mb: 8,
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            align="center"
            style={{ flexGrow: 1 }}
            color="text.primary"
          >
            Book Liberty App
          </Typography>
          <CustomizedSwitches onChange={toggleTheme} checked={darkMode} />
        </Box>

        <Container maxWidth="xl">
          <main className="app-main">
            <div className="app-left-column">
              <BookForm></BookForm>
            </div>
            <div className="app-right-column">
              <Filter></Filter>
              <BookList></BookList>
            </div>
          </main>

          <Error />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
