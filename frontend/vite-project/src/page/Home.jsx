import BookList from "../components/BookList/BookList";
import BookForm from "../components/BookForm/BookForm";
import Filter from "../components/Filter/Filter";
import Error from "../components/Error/Error";

import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100vh",
      }}
    >
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
  );
}
