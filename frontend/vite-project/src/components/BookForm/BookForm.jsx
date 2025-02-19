import { useState } from "react";
import "./BookForm.css";
import booksData from "../../data/books.json";
import createBookWuthID from "../../utils/creatBookWithID";
import { addBook, thunkFunction } from "../../redux/slices/bookSlice";

import { useDispatch } from "react-redux";

export default function BookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
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
    }
  }

  const handleAddRandomBookByAPI = () => {
    dispatch(thunkFunction);
  };

  return (
    <div className="app-block book-form">
      <h2>Add new book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add random
        </button>
        <button type="button" onClick={handleAddRandomBookByAPI}>
          Add random book by API
        </button>
      </form>
    </div>
  );
}
