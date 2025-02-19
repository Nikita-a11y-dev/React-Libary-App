import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWuthID from "../../utils/creatBookWithID";

const initialState = [];

const bookSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavorite: (state, action) => {
      const book = state.find((book) => book.id === action.payload);
      if (book) {
        book.isFavorite = !book.isFavorite;
      }
    },
  },
});
export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;

export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get("http://localhost:4000/random-book");
    if (res?.data?.title && res?.data?.author) {
      dispatch(addBook(createBookWuthID(res.data, "API")));
    }
  } catch (error) {
    console.log(error);
  }
};

export default bookSlice.reducer;
