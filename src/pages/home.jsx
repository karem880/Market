import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../component/NavBar';
import axios from 'axios';
import { MdShoppingCart } from 'react-icons/md';
import ComplexTouchGallery from './slider';


function Home() {


  



  return (
    <>
      <NavBar />



      <section className='flex flex-col md:flex-row gap-20 md:gap-3 w-full items-center justify-around text-4xl mt-16 bg-green-50 p-8 text-center'>
    <div className='p-5 flex items-center flex-col h-full mt-10'>
        <h1 className='text-green-600 text-3xl font-extrabold uppercase mb-4'>Welcome to My Market</h1>
        <h2 className='text-green-600 mt-2 text-lg font-extrabold text-center'>Explore our sections by clicking the button below.</h2>

        <p className='text-gray-700 text-base mt-4'>Discover the freshest produce and more!</p>
        <button className='w-full md:w-[70%] text-xl font-bold p-3 bg-green-600 text-white flex items-center justify-center h-[50px] rounded-lg mt-6 hover:bg-green-700 transition duration-300 ease-in-out'>Explore Market</button>
    </div>

    <div className='flex items-center justify-center h-full flex-col md:flex-row w-full md:w-[50%] mt-10'>
        <div className='flex h-[70%] flex-col md:flex-row overflow-hidden gap-3 rounded-2xl'>
            <div className='w-full md:w-[50%] h-full flex flex-col gap-3'>
                <img src="./assets/vegtablesheader.webp" className='h-[300px] rounded-lg object-cover w-full md:w-[300px]' alt="" />
                <img src="./assets/grid1.jpg" className='h-[300px] rounded-lg object-cover w-full md:w-[300px]' alt="" />
            </div>

            <div className='w-full md:w-[50%] h-full flex flex-col gap-3'>
                <img src="./assets/grid3.webp" className='h-[300px] rounded-lg object-cover w-full md:w-[300px]' alt="" />
                <img src="./assets/grid4.webp" className='h-[300px] rounded-lg object-cover w-full md:w-[300px]' alt="" />
            </div>
        </div>
    </div>
</section>
<ComplexTouchGallery />



<section className='relative flex flex-col md:flex-row gap-10 w-full h-[80vh]  p-5 mt-44 text-center'>
  <div className='w-full md:w-[70%] md:h-[100%] '>
    <div className='h-full bg-cover relative border-dashed border border-green-500 flex-col rounded-2xl bg-current flex items-center  justify-center py-5 text-2xl font-extrabold text-green-600' style={{ backgroundImage: 'url("./assets/Home.png")' }}>
      {/* Content for the first div */}
      <p>Discover the Hidden Treasures</p>
      <p className="text-xl font-semibold mt-4">Explore our exquisite collection of fresh and premium products.</p>
      <button className='w-[70%] md:w-[50%] text-xl font-bold p-3 bg-green-600 text-white flex items-center justify-center h-[50px] rounded-lg mt-6 hover:bg-green-700 transition duration-300 ease-in-out'>Explore Market</button>

    </div>
  </div>

  <div className='w-full md:w-[30%] flex flex-col gap-5 h-full '>
   
    
    <div className='h-full md:h-[50%] bg-cover relative text-center  border-dashed border border-green-500 flex-col rounded-2xl bg-current flex items-center  justify-center py-5 text-2xl font-extrabold text-green-600' style={{ backgroundImage: 'url("./assets/onion.png")' }}>
      {/* Content for the first div */}
      <p>Discover the Hidden Treasures</p>
      <p className="text-xl font-semibold mt-4">Explore our exquisite collection of fresh and premium products.</p>
      <button className=' absolute top-[-50px]  md:top-[-40px] left-[-10px] rounded-full  text-xl font-bold p-3 bg-yellow-400 w-[50px] h-[50px] text-white flex items-center justify-center   mt-6 hover:bg-yellow-700 transition duration-300 ease-in-out'>-50%</button>

    </div>



    <div className='h-[50%] bg-cover relative border-dashed border text-center  border-green-500 flex-col rounded-2xl bg-current flex items-center  justify-center py-5 text-2xl font-extrabold text-green-600' style={{ backgroundImage: 'url("./assets/felfel.png")' }}>
      {/* Content for the first div */}
      <p>Discover the Hidden Treasures</p>
      <p className="text-xl font-semibold mt-4">Explore our exquisite collection of fresh and premium products.</p>
      <button className=' absolute top-[-50px]  md:top-[-40px] left-[-10px] rounded-full  text-xl font-bold p-3 bg-green-600 w-[50px] h-[50px] text-white flex items-center justify-center   mt-6 hover:bg-green-700 transition duration-300 ease-in-out'>-50%</button>
 
    </div>



  </div>
</section>


















{/* Creative Section */}
<section className='bg-gradient-to-r from-green-500 to-green-300 py-24 mt-32 text-center text-white'>
  <div className='container mx-auto flex flex-col items-center'>
    <div className='w-full flex items-center justify-center text-white text-[100px] py-10'>
      <MdShoppingCart/>
    </div>
    <h2 className='text-4xl font-extrabold mb-6'>Discover Something Extraordinary</h2>
    <p className='text-2xl mb-10'>Unleash your imagination and embark on a journey of flavor and delight with our unique selection of products.</p>
    <Link to='/' className='bg-gradient-to-r from-purple-500 to-red-300 hover:bg-yellow-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition duration-300 ease-in-out'>Explore Now</Link>
  </div>
</section>



     



      
    
    </>
  );
}

export default Home;
