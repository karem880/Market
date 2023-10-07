import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBook, FaStar,FaQuestion, FaBars,FaCarAlt } from 'react-icons/fa'; // Example using Font Awesome icons
import { MdShoppingCart } from 'react-icons/md';
function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
      };


   
    
    return (
        <>


<header className=' hidden md:flex justify-around p-5  w-full fixed top-0 left-0 z-50  bg-slate-700 text-green-400   items-center drop-shadow-2xl '>
<p className='text-lg font-extrabold'>Who we are</p>
            <h1 className='flex  items-center justify-between text-lg md:text-2xl font-extrabold  '><MdShoppingCart className='md:mr-5'/>Marketko</h1>
            <div className='flex flex-col justify-between items-center '>
                <FaQuestion/>
                <p className='text-lg font-extrabold'>Help</p>

            </div>

 </header>
<nav className=' w-full fixed top-0 left-0 bg-slate-700 text-green-400  z-50'>
    <header className='md:hidden flex justify-between p-5    items-center drop-shadow-2xl relative'>
    <h1 className='flex  items-center justify-between text-lg md:text-2xl font-extrabold  '><MdShoppingCart className='md:mr-5'/>Marketko</h1>
      <p className='cursor-pointer ' onClick={toggleMenu}>
        <FaBars className='text-green-500 dark:text-white dark:hover:text-gray-300' size={22} />
      </p>
      {showMenu &&(
         <ul className="absolute bottom-[-144px]  h-[150px] flex flex-col justify-around items-start text-xl left-0 w-full p-5  bg-slate-500  z-50" >
       <p className='text-lg font-extrabold'>Who we are</p>
       <div className='flex  justify-between items-center '>
                <FaQuestion />
                <p className='text-lg font-extrabold'>Help</p>

            </div>
     
        
       </ul>
      )}
     
    </header>
</nav>

      
        </>
    );
}

export default NavBar;