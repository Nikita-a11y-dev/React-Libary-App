import { Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          opacity: visible ? 1 : 0,
          transition: "opacity 1s ease-in-out",
        }}
      >
        О проекте
      </Typography>
      <Typography variant="body1" sx={{ marginTop: "20px" }}>
        Мы создаем приложение для любителей книг. Эта информация появится с
        анимацией.
      </Typography>
    </Box>
  );
}
