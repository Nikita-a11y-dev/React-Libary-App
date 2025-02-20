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
    // <div className="app-block filter">
    //   <div className="filter-row">
    //     <div className="filter-group">
    //       <input
    //         onChange={handleTitleFilterChange}
    //         type="text"
    //         value={titleFilter}
    //         placeholder="Filter by Title..."
    //       />
    //     </div>
    //     <div className="filter-group">
    //       <input
    //         onChange={handleAuthorFilterChange}
    //         type="text"
    //         value={authorFilter}
    //         placeholder="Filter by Author..."
    //       />
    //     </div>
    //     <div className="filter-group">
    //       <label>
    //         <input
    //           type="checkbox"
    //           checked={onlyFavoriteFilter}
    //           onChange={handleOnlyFavoriteFilterChange}
    //         />
    //         Only Favorite
    //       </label>
    //     </div>
    //     <button type="button " onClick={handleResetFilters}>
    //       Reset Filters
    //     </button>
    //   </div>
    // </div>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={2}
      sx={{
        backgroundColor: "background.paper",
        pt: 1,
        m: 2.5,
        width: "800px",
        borderRadius: 2,
      }}
    >
      <TextField label="Title" />
      <TextField label="Title" />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Favorite"
        />
      </FormGroup>

      <Button variant="outlined" sx={{ width: "200px", mb: 1 }}>
        Reset Filters
      </Button>
    </Box>
  );
}
