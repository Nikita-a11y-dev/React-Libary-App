import { useSelector } from "react-redux";
import "./BookList.css";
import { useDispatch } from "react-redux";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreaters";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";

export default function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  function handelDeleteBook(id) {
    dispatch(deleteBook(id));
  }

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

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
              <div className="book-actions">
                <span onClick={() => handleToggleFavorite(book.id)}>
                  {book.isFavorite ? (
                    <BsBookmarkStarFill className="star-icon" />
                  ) : (
                    <BsBookmarkStar className="star-icon" />
                  )}
                </span>
                <button onClick={() => handelDeleteBook(book.id)}>
                  delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
