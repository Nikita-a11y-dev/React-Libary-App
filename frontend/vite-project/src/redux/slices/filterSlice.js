import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  author: "",
};
const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    setTitleFilter: (state, action) => {
      state.title = action.payload;
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload;
    },
    resetFilters: (state) => {
      return initialState;
    },
  },
});

export const { setTitleFilter, resetFilters, setAuthorFilter } =
  filterSlice.actions;
export default filterSlice.reducer;
export const selectTitle = (state) => state.filter.title;
export const selectAuthor = (state) => state.filter.author;
