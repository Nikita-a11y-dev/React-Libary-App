import "./Filter.css";
import { useEffect } from "react";
import {
  setTitleFilter,
  setAuthorFilter,
  setOnlyFavoriteFilter,
  resetFilters,
  selectTitle,
  selectAuthor,
  selectFavorite,
} from "../../redux/slices/filterSlice";
import {
  Box,
  TextField,
  FormGroup,
  FormControlLabel,
  Button,
  Checkbox,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitle);
  const authorFilter = useSelector(selectAuthor);
  const onlyFavoriteFilter = useSelector(selectFavorite);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleOnlyFavoriteFilterChange = (e) => {
    dispatch(setOnlyFavoriteFilter(e.target.checked));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    setSearchParams({});
  };

  useEffect(() => {
    const title = searchParams.get("title") || "";
    const author = searchParams.get("author") || "";
    let favorite = searchParams.get("favorite") === "true";

    dispatch(setTitleFilter(title));
    dispatch(setAuthorFilter(author));
    dispatch(setOnlyFavoriteFilter(favorite));
  }, []);

  useEffect(() => {
    const params = {};

    if (titleFilter) params.title = titleFilter;
    if (authorFilter) params.author = authorFilter;
    params.favorite = onlyFavoriteFilter;

    setSearchParams(params);
  }, [titleFilter, authorFilter, onlyFavoriteFilter]);

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={2}
      sx={{
        backgroundColor: "background.paper",
        pt: 1,
        m: 2.5,
        maxWidth: "850px",
        borderRadius: 2,
      }}
    >
      <TextField
        label="Title"
        onChange={handleTitleFilterChange}
        value={titleFilter}
      />

      <TextField
        label="Author"
        onChange={handleAuthorFilterChange}
        type="text"
        value={authorFilter}
      />
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={onlyFavoriteFilter}
              onChange={handleOnlyFavoriteFilterChange}
            />
          }
          label="Favorite"
        />
      </FormGroup>

      <Button
        variant="outlined"
        sx={{ width: "200px", mb: 1 }}
        onClick={handleResetFilters}
      >
        Reset Filters
      </Button>
    </Box>
  );
}
