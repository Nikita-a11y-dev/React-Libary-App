import "./BookList.css";
import { deleteBook, toggleFavorite } from "../../redux/books/actionCreaters";
import { useSelector, useDispatch } from "react-redux";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import {
  selectTitle,
  selectAuthor,
  selectFavorite,
} from "../../redux/slices/filterSlice";

export default function BookList() {
  const books = useSelector((state) => state.books);
  const titleFilter = useSelector(selectTitle);
  const authorFilter = useSelector(selectAuthor);
  const onlyFavoriteFilter = useSelector(selectFavorite);
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

    const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
    return matchesTitle && matchesAuthor && matchesFavorite;
  });

  const highlightMatch = (text, filter) => {
    if (!filter) return text;
    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} className="highlight">
            {substring}
          </span>
        );
      }
      return substring;
    });
  };

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
                {++i}. {highlightMatch(book.title, titleFilter)} by {""}
                <strong>{highlightMatch(book.author, authorFilter)}</strong>
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
