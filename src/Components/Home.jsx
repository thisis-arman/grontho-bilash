import React, { useEffect, useState } from "react";
import cover1 from "../../public/banner-3.png";
import cover2 from "../../public/banner-2.png";
import ReactBook from "./ReactBook";
import './Home.css'
import Categories from "./Categories";

const Home = () => {
  const [reactBooks, setReactBooks] = useState([]);
  const [showMore, setShowMore] = useState(true);

  const handleAddToCart =price=>{
    console.log('hello',price)
  }

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/search/react")
      .then((res) => res.json())
      .then((data) => setReactBooks(data.books));
  }, []);
  console.log(reactBooks);
  return (
    <div>
      {/* Hero section */}
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={cover1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={cover2} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={cover1} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="search-field">
        <h2 className="text-7xl font-extrabold text-yellow-500">Grontho Bilash</h2>
        <h3 className="text-3xl text-white font-medium ">Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
        <input type="search" name="search" id="search-field" />
        <button className="btn" type="search">Search</button>
      </div> */}
      <div>
      <h1 className="text-center text-6xl font-extrabold py-8">
          Categories
        </h1>
        <Categories/>
      </div>
      {/* Latest collection section */}

      <div className="py-14">
        <h1 className="text-center text-6xl font-extrabold py-8">
          Latest Collections
        </h1>

        <div className="grid md:grid-cols-3 gap-10 px-20">
          {showMore
            ? reactBooks
                .slice(0, 6)
                .map((book) => (
                  <ReactBook key={book.isbn13} reactBooks={book}
                  handleAddToCart={handleAddToCart} />
                ))
            : reactBooks.map((book) => (
                <ReactBook key={book.isbn13} reactBooks={book}
                handleAddToCart={handleAddToCart} />
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

export default Home;
