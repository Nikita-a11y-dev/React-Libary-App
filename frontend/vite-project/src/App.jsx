import BookList from "./components/BookList/BookList";
import BookForm from "./components/BookForm/BookForm";
import Filter from "./components/Filter/Filter";
import Error from "./components/Error/Error";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Libery App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm></BookForm>
        </div>
        <div className="app-right-column">
          <Filter></Filter>
          <BookList></BookList>
        </div>
      </main>
      <Error />
    </div>
  );
}
