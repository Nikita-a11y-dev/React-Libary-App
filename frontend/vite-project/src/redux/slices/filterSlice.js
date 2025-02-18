import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const { setTitleFilter, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
export const selectTitle = (state) => state.filter.title;
