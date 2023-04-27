import React, { useEffect, useState } from "react";
import Book from "./Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [showMore , setShowMore]=useState(true)
  console.log(books.length);

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) =>setBooks(data.books));
  }, []);

  return (
    <div>
      <h1 className="text-center text-5xl font-extrabold py-12">
          Learn and Explore new Topics
        </h1>
      <div className="grid md:grid-cols-3 gap-10 px-20">
        {showMore?books.slice(0,9).map
        ((book) => (
          <Book 
          key={book.isbn13}
          book={book} 
          />
        ))
        :books.map
        ((book) => (
          <Book 
          key={book.isbn13}
          book={book} 
          />
        ))
    }
    <div>
    <div className="flex justify-center m-0 m-auto">
          {showMore ? (
            <button
              className="btn btn-success mt-16 px-24"
              onClick={() => setShowMore(false)}
            >
              View more
            </button>
          ) : (
            <button
              className="btn btn-secondary mt-16 px-24"
              onClick={() => setShowMore(true)}
            >
              View less
            </button>
          )}
        </div>
    </div>
      </div>
    </div>
  );
};

export default Books;
