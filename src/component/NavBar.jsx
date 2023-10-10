import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBook, FaStar,FaQuestion, FaBars,FaCarAlt,FaUser,FaHeart } from 'react-icons/fa'; // Example using Font Awesome icons
import { MdShoppingCart } from 'react-icons/md';
function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
      };


   
    
    return (
        <>


<header className=' hidden md:flex justify-between p-5  w-full fixed top-0 left-0 z-50  uppercase text-lg font-bold  items-center drop-shadow-2xl px-10 bg-white shadow-gray-400 h-[70px] overflow-hidden '>
  <div>
    <img src="/public/assets/loogo.webp" width={100} className='object-cover' alt="" />
  </div>
  <div>
    <ul className='flex items-center justify-center gap-10'>
      <li>home</li>
      <li>alll</li>
      <li>category</li>
      <li>contact</li>
      <li>aboutdev</li>
    </ul>
  </div>
  <div>
    <ul className='flex items-center justify-center gap-10'>
      <li ><FaUser size={24}/>
      </li>
      <li className='relative'><FaHeart size={24} />
      <span className='flex absolute top-[-18px] right-[-10px] w-[20px] h-[20px] rounded-full bg-green-400 text-white items-center justify-center'>0</span>
      </li>
      <li className='relative'><MdShoppingCart size={24}/>
      <span className='flex absolute top-[-18px] right-[-10px] w-[20px] h-[20px] rounded-full bg-green-400 text-white items-center justify-center'>0</span>
</li>
    </ul>
  </div>


 </header>












<nav className=' w-full fixed top-0 left-0 bg-white text-xl font-bold  z-50 '>
    <header className='md:hidden flex justify-between p-5    items-center drop-shadow-2xl relative'>
    <img src="/public/assets/loogo.webp" width={100} className='object-cover' alt="" />
    <div>
    <ul className='flex items-center justify-center gap-10'>
    <li ><FaUser size={24}/>
      </li>
      <li className='relative'><FaHeart size={24} />
      <span className='flex absolute top-[-18px] right-[-10px] w-[20px] h-[20px] rounded-full bg-green-400 text-white items-center justify-center'>0</span>
      </li>
      <li className='relative'><MdShoppingCart size={24}/>
      <span className='flex absolute top-[-18px] right-[-10px] w-[20px] h-[20px] rounded-full bg-green-400 text-white items-center justify-center'>0</span>
</li>
    </ul>
  </div>
      <p className='cursor-pointer ' onClick={toggleMenu}>
        
        <FaBars className='text-green-500 dark:text-white dark:hover:text-gray-300' size={22} />
      </p>

      {showMenu &&(
         <ul className="absolute bottom-[-184px]  h-[200px] flex flex-col justify-center gap-5 items-start text-xl left-0 w-full p-5  text-white bg-green-500  z-50" >
 
  <div>
    <ul className=''>
      <li>home</li>
      <li>alll</li>
      <li>category</li>
      <li>contact</li>
      <li>aboutdev</li>
    </ul>
  </div>
     
        
       </ul>
      )}
     
    </header>
</nav>

      
        </>
    );
}

export default NavBar;