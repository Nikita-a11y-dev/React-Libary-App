import { deleteBook, toggleFavorite } from "../../redux/slices/bookSlice";
import { useSelector, useDispatch } from "react-redux";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
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

  const DeleteButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#DC3545",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#B02A37",
    },
  }));

  const highlightMatch = (text, filter) => {
    if (!filter) return text;
    const regex = new RegExp(`(${filter})`, "gi");
    return text.split(regex).map((substring, i) => {
      if (substring.toLowerCase() === filter.toLowerCase()) {
        return (
          <span key={i} style={{ backgroundColor: "#ff0" }}>
            {substring}
          </span>
        );
      }
      return substring;
    });
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "background.paper",
        pt: 1,
        m: 2.5,
        width: "850px",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        sx={{ fontWeight: "600" }}
      >
        List
      </Typography>
      {filteredBooks.length === 0 ? (
        <Typography variant="h6" gutterBottom align="center">
          No books available
        </Typography>
      ) : (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "10%" }}>№</TableCell>
              <TableCell sx={{ width: "25%" }}>Title</TableCell>
              <TableCell sx={{ width: "25%" }}>Author</TableCell>
              <TableCell sx={{ width: "40%" }}>Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredBooks.map((book, index) => (
              <TableRow key={book.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{highlightMatch(book.title, titleFilter)}</TableCell>
                <TableCell>
                  <strong>{highlightMatch(book.author, authorFilter)}</strong> (
                  {book.source})
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "end",
                  }}
                >
                  <span onClick={() => handleToggleFavorite(book.id)}>
                    {book.isFavorite ? (
                      <BsBookmarkStarFill
                        style={{
                          fontSize: "24px",
                          margin: "0 20px",
                          cursor: "pointer",
                          transition: "color 0.3s ease",
                          color: "#fca510",
                        }}
                      />
                    ) : (
                      <BsBookmarkStar
                        style={{
                          fontSize: "24px",
                          margin: "0 20px",
                          cursor: "pointer",
                          transition: "color 0.3s ease",
                          color: "#fca510",
                        }}
                      />
                    )}
                  </span>
                  <DeleteButton onClick={() => handelDeleteBook(book.id)}>
                    delete
                  </DeleteButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
