import React, { useState } from "react";

const BookFilter = ({ books }) => {
  const [filters, setFilters] = useState({
    author: "",
    title: "",
    country: "",
    language: "",
    year: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const filteredBooks = books.filter((book) =>
    Object.keys(filters).every((key) => {
      if (key === "author" && filters[key] === "all") {
        return true; // Include all books for 'author' field
      }
      return filters[key]
        ? book[key]
            .toString()
            .toLowerCase()
            .includes(filters[key].toLowerCase())
        : true;
    }),
  );

  return (
    <div>
      <h1>Book List</h1>
      <div className="grid-cols-2 gap-4 w-33">
        <label>author</label>
        <input
          type="text"
          name="author"
          value={filters.author}
          onChange={handleChange}
          placeholder="Filter by author"
        />
        <label>title</label>
        <input
          type="text"
          name="title"
          value={filters.title}
          onChange={handleChange}
          placeholder="Filter by title"
        />
        <label>country</label>
        <input
          type="text"
          name="country"
          value={filters.country}
          onChange={handleChange}
          placeholder="Filter by country"
        />
        <label>language</label>
        <input
          type="text"
          name="language"
          value={filters.language}
          onChange={handleChange}
          placeholder="Filter by language"
        />
        <label>year</label>
        <input
          type="text"
          name="year"
          value={filters.year}
          onChange={handleChange}
          placeholder="Filter by year"
        />
      </div>
      <div className="flex">
        {filteredBooks.map((book, index) => (
          <div key={index}>
            <h2>{book.title}</h2>
            <div className="grid-cols-2">
              <p>Author:</p>
              <p>{book.author}</p>
              <p>Pages:</p>
              <p>{book.pages}</p>
              <p>Country:</p>
              <p>{book.country}</p>
              <p>Language:</p>
              <p>{book.language}</p>
              <p>Year:</p>
              <p>{book.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookFilter;
