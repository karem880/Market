import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CustomSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="w-[90%] m-auto mt-32">
      <h2 className="text-3xl mb-8 text-center text-green-600 font-extrabold">our sections</h2>
      <Slider {...settings} className="mt-12">
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/public/assets/grid1.jpg"
            alt="Image 1"
            className="w-full h-[500px] md:h-[800px] object-cover rounded-lg shadow-lg transform scale-105 hover:scale-100 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-gradient-to-b from-transparent to-black hover:from-black bg-opacity-80 hover:bg-opacity-100 transition-opacity slide-overlay p-6">
            <h3 className="text-2xl font-semibold mb-2 text-yellow-400">Vegetables</h3>
            <p className="text-lg text-gray-300">Description of Product 1</p>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/public/assets/meat.jpg"
            alt="Image 2"
            className="w-full h-[500px] md:h-[800px] object-cover rounded-lg shadow-lg transform scale-105 hover:scale-100 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-gradient-to-b from-transparent to-black hover:from-black bg-opacity-80 hover:bg-opacity-100 transition-opacity slide-overlay p-6">
            <h3 className="text-2xl font-semibold mb-2 text-red-400">Meat</h3>
            <p className="text-lg text-gray-300">Description of Product 2</p>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/public/assets/dairy.jpg"
            alt="Image 3"
            className="w-full h-[500px] md:h-[800px] object-cover rounded-lg shadow-lg transform scale-105 hover:scale-100 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-gradient-to-b from-transparent to-black hover:from-black bg-opacity-80 hover:bg-opacity-100 transition-opacity slide-overlay p-6">
            <h3 className="text-2xl font-semibold mb-2 text-blue-400">Dairy</h3>
            <p className="text-lg text-gray-300">Description of Product 3</p>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/public/assets/fruits.jpg"
            alt="Image 4"
            className="w-full h-[500px] md:h-[800px] object-cover rounded-lg shadow-lg transform scale-105 hover:scale-100 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-gradient-to-b from-transparent to-black hover:from-black bg-opacity-80 hover:bg-opacity-100 transition-opacity slide-overlay p-6">
            <h3 className="text-2xl font-semibold mb-2 text-green-400">Fruits</h3>
            <p className="text-lg text-gray-300">Description of Product 4</p>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden">
          <img
            src="/public/assets/drinks.webp"
            alt="Image 5"
            className="w-full h-[500px] md:h-[800px] object-cover rounded-lg shadow-lg transform scale-105 hover:scale-100 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-gradient-to-b from-transparent to-black hover:from-black bg-opacity-80 hover:bg-opacity-100 transition-opacity slide-overlay p-6">
            <h3 className="text-2xl font-semibold mb-2 text-pink-400">Drinks</h3>
            <p className="text-lg text-gray-300">Description of Product 5</p>
          </div>
        </div>
        {/* Add more slides here */}
      </Slider>
    </div>
  );
};

export default CustomSlider;
