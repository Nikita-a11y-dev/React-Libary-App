import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import Filter from "./components/Filter/Filter";
import Error from "./components/Error/Error";
import "./App.css";
import { useState, useLayoutEffect, useMemo } from "react";

import { ThemeProvider } from "@mui/material/styles";
import { Typography, Button, Box, Container } from "@mui/material";

import lightTheme from "./theme/lightTheme";
import darkTheme from "./theme/darkTheme";

import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./page/Layout";
import Home from "./page/Home";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useLayoutEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const isDarkMode = storedTheme ? JSON.parse(storedTheme) : false;
    setDarkMode(isDarkMode);
  }, []);

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  const toggleTheme = (event) => {
    const isDarkMode = event.target.checked;
    setDarkMode(isDarkMode);
    localStorage.setItem("theme", JSON.stringify(isDarkMode));
  };

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={<Layout darkMode={darkMode} toggleTheme={toggleTheme} />}
        >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}
