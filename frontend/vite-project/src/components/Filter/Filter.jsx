import "./Filter.css";
import {
  setTitleFilter,
  setAuthorFilter,
  resetFilters,
  selectTitle,
  selectAuthor,
} from "../../redux/slices/filterSlice";

import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitle);
  const authorFilter = useSelector(selectAuthor);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const handleAuthorFilterChange = (e) => {
    dispatch(setAuthorFilter(e.target.value));
  };

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            onChange={handleTitleFilterChange}
            type="text"
            value={titleFilter}
            placeholder="Filter by Title..."
          />
        </div>
        <div className="filter-group">
          <input
            onChange={handleAuthorFilterChange}
            type="text"
            value={authorFilter}
            placeholder="Filter by Author..."
          />
        </div>
        <button type="button " onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
}
