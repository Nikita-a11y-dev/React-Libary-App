import { useState } from "react";
import "./BookForm.css";
import { FaSpinner } from "react-icons/fa";
import booksData from "../../data/books.json";
import createBookWuthID from "../../utils/creatBookWithID";
import { setError } from "../../redux/slices/errorSlice";
import { addBook, fetchBook } from "../../redux/slices/bookSlice";

import { useDispatch } from "react-redux";
import { Grid, TextField, Typography, Button } from "@mui/material";

export default function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    dispatch(addBook(createBookWuthID(randomBook, "random")));
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (title && author) {
      const book = createBookWuthID({ title, author }, "manual");
      dispatch(addBook(book));
      setTitle("");
      setAuthor("");
    } else {
      dispatch(setError("You must fill title and author"));
    }
  }

  const handleAddRandomBookByAPI = async () => {
    try {
      setIsLoading(true);
      await dispatch(fetchBook("http://localhost:4000/random-book-delay"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      sx={{
        backgroundColor: "background.paper",
        borderRadius: 2,
        p: "10px",
        mt: 2.5,
        width: "500px",
        boxShadow: "rgba(0,0,0,0.1)",
      }}
    >
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom align="center" color="text.title">
          ADD NEW BOOK
        </Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "300px", mb: 1 }}
        />
      </Grid>

      <Grid item xs={12} md={6} sx={{ mb: "10px" }}>
        <TextField
          fullWidth
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          sx={{ width: "300px", mb: 1 }}
        />
      </Grid>

      <Grid
        item
        xs={12}
        md={6}
        container
        direction="column"
        alignItems="center"
      >
        <Button
          variant="outlined"
          sx={{ width: "300px", mb: 1 }}
          onClick={handleSubmit}
        >
          Add Book
        </Button>

        <Button
          variant="outlined"
          sx={{ width: "300px", mb: 1 }}
          onClick={handleAddRandomBook}
        >
          Add Random
        </Button>

        <Button
          variant="outlined"
          sx={{ width: "300px" }}
          onClick={handleAddRandomBookByAPI}
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span>Loading Book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            "Add random book by API"
          )}
        </Button>
      </Grid>
    </Grid>
  );
}
