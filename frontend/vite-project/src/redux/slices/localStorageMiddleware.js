export const localStorageMiddleware = (store) => (next) => (action) => {
  // Пропускаем экшен дальше
  const result = next(action);

  // Получаем обновленный state
  const state = store.getState();

  // Сохраняем ТОЛЬКО книги в localStorage
  localStorage.setItem("books", JSON.stringify(state.books));

  // Возвращаем результат экшена
  return result;
};
