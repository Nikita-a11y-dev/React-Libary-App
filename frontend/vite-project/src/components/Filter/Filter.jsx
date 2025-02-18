import "./Filter.css";
import {
  setTitleFilter,
  resetFilters,
  selectTitle,
} from "../../redux/slices/filterSlice";

import { useDispatch, useSelector } from "react-redux";

export default function Filter() {
  const dispatch = useDispatch();
  const titleFilter = useSelector(selectTitle);

  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
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
        <button type="button " onClick={handleResetFilters}>
          Reset Filters
        </button>
      </div>
    </div>
  );
}
