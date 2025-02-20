import "./Filter.css";
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

export default function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitle);
  const authorFilter = useSelector(selectAuthor);
  const onlyFavoriteFilter = useSelector(selectFavorite);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  const handleOnlyFavoriteFilterChange = () => {
    dispatch(setOnlyFavoriteFilter());
  };

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
        label="Title"
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
