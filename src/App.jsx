import BookFilter from "./components/BookFilter";
import "./styles.css";

const books = [
  {
    author: "Author 1",
    title: "Title 1",
    pages: 123,
    country: "Country 1",
    language: "Language 1",
    year: 2001,
  },
  {
    author: "Author 2",
    title: "Title 2",
    pages: 456,
    country: "Country 2",
    language: "Language 2",
    year: 2002,
  },
  // Add more books here...
];

export default function App() {
  return (
    <div className="App">
      <BookFilter books={books} />
    </div>
  );
}
