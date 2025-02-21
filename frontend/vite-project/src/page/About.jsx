import { Typography, Box, Container } from "@mui/material";
import AccordionUsage from "../components/AccordionUsage";

export default function About() {
  return (
    <Box sx={{ backgroundColor: "background.default", p: 4 }}>
      <Container maxWidth="lg" sx={{ height: "76vh" }}>
        <Typography
          variant="h4"
          align="left"
          sx={{ color: "text.title", mb: 2 }}
        >
          About the Book Liberty Project
        </Typography>
        <Typography
          variant="h5"
          align="left"
          sx={{ color: "text.text", mb: 5 }}
        >
          Book Liberty is an application that helps users delete, add to
          favorites and filter books. We strive to provide A simple and
          convenient tool for all book lovers.
        </Typography>
        <AccordionUsage />
      </Container>
    </Box>
  );
}
