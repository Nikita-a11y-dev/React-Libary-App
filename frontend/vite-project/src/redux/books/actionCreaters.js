import * as a from "./actyionTypes";

export const addBook = (newBook) => {
  return {
    type: a.ADD_BOOK,
    payload: newBook,
  };
};

export const deleteBook = (id) => ({
  type: a.DELETE_BOOK,
  payload: id,
});

export const toggleFavorite = (id) => {
  return {
    type: a.TOGGLE_FAVORITE,
    payload: id,
  };
};
