import { Typography, Box } from "@mui/material";
import CustomizedSwitches from "../components/CustomizedSwitches";
import { Outlet } from "react-router-dom"; // Не забудь импортировать Outlet для вложенных маршрутов

export default function Layout({ darkMode, toggleTheme }) {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={2}
        sx={{
          backgroundColor: "background.header",
          pt: 1,
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

      <Outlet />
    </>
  );
}
