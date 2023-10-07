import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from 'react-router-dom';

function RandomBooksSlider({ books }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="w-[80%] m-auto mt-32">
      <Slider {...settings} className='w-full'>
        {books.map((book, index) => (
          <div key={index} className="w-full">
            <NavLink to={`/book/${index}`} className="w-full h-full">
                <img src={book.cover} alt={book.title}  className='md:rounded-3xl' />
              </NavLink>
       
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RandomBooksSlider;
