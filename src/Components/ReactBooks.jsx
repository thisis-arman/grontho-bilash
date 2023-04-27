import React, { useEffect, useState } from 'react';
import ReactBook from './ReactBook';

const ReactBooks = () => {
    const [reactBooks, setReactBooks] = useState([]);
    const [showMore, setShowMore] = useState(true);

    useEffect(() => {
        fetch("https://api.itbook.store/1.0/search/react")
          .then((res) => res.json())
          .then((data) => setReactBooks(data.books));
      }, []);

    return (
        <div>
             <div className="py-14">
        <h1 className="text-center text-5xl font-extrabold py-8">
          Master On ReactJS
        </h1>

        <div className="grid md:grid-cols-3 gap-10 px-20">
          {showMore
            ? reactBooks
                .slice(0, 6)
                .map((book) => (
                  <ReactBook key={book.isbn13} reactBooks={book} />
                ))
            : reactBooks.map((book) => (
                <ReactBook key={book.isbn13} reactBooks={book} />
              ))}
        </div>
        <div className="flex justify-center">
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
    );
};

export default ReactBooks;