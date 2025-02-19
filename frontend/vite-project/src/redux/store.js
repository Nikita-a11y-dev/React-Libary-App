import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookSlice";
import filterReducer from "./slices/filterSlice";
import errorReducer from "./slices/errorSlice";
import { localStorageMiddleware } from "./slices/localStorageMiddleware";

const store = configureStore({
  reducer: {
    books: bookReducer,
    filter: filterReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware),
});

export default store;
