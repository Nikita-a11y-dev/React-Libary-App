import "./BookList.css";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreaters";
import { useSelector, useDispatch } from "react-redux";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import { selectTitle, selectAuthor } from "../../redux/slices/filterSlice";

export default function BookList() {
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector(selectTitle);
  const authorFilter = useSelector(selectAuthor);
  const dispatch = useDispatch();

  function handelDeleteBook(id) {
    dispatch(deleteBook(id));
  }

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavorite(id));
  };

  const filteredBooks = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());

    const matchesAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase());

    return matchesTitle && matchesAuthor;
  });

  return (
    <div className="app-block book-list">
      <h2>List</h2>
      {filteredBooks.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {filteredBooks.map((book, i) => (
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
