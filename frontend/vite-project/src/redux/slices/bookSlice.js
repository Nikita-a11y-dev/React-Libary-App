import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import createBookWuthID from "../../utils/creatBookWithID";
import { setError } from "./errorSlice";

export const fetchBook = createAsyncThunk(
  "books/fetchBook",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      throw error;
    }
  }
);

const loadBooksFromLocalStorage = () => {
  try {
    const savedBooks = localStorage.getItem("books");
    return savedBooks ? JSON.parse(savedBooks) : [];
  } catch (error) {
    console.error("Ошибка при загрузке книг из localStorage:", error);
    return [];
  }
};

const initialState = loadBooksFromLocalStorage();

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
  extraReducers: (builder) => {
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.author && action.payload.title) {
        state.push(createBookWuthID(action.payload, "API"));
      }
    });
  },
});
export const { addBook, deleteBook, toggleFavorite } = bookSlice.actions;

export default bookSlice.reducer;
