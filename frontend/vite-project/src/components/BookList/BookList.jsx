import { useSelector } from "react-redux";
import "./BookList.css";
import { useDispatch } from "react-redux";
import { deleteBook } from "../../redux/books/actionCreaters";

export default function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  function handelDeleteBook(id) {
    dispatch(deleteBook(id));
  }

  return (
    <div className="app-block book-list">
      <h2>List</h2>
      {books.lenght === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book, i) => (
            <li key={book.id}>
              <div className="book-info">
                {++i}. {book.title} by <strong>{book.author}</strong>
              </div>
              <button
                className="book-actions"
                onClick={() => handelDeleteBook(book.id)}
              >
                delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
