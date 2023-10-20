import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBolt, FaEye, FaHeart, FaRegStar, FaShoppingCart, FaStar } from 'react-icons/fa';
import NavBar from '../component/NavBar';
import { NavLink } from 'react-router-dom';

function Shop() {
  const [data, setData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/src/data/db.json");
        setData(response.data);
      } catch (error) {
        console.error('حدث خطأ أثناء جلب البيانات:', error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  if (!data.products) {
    return <div>Loading...</div>;
  }

  const categories = Object.keys(data.products);
  const displayedProducts =
    selectedCategory === 'all'
      ? [].concat(...Object.values(data.products))
      : data.products[selectedCategory];

  const filteredProducts = displayedProducts.filter((product) =>
    product && product.name && product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <div className="container mt-24 mx-auto p-4">
      <div className="mb-4 flex flex-col md:flex-row items-center justify-around w-full">
        <div className='flex md:flex-row flex-col w-full md:w-[25%] items-center'>
        <label htmlFor="category" className="block text-green-700 font-extrabold">Select Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="bg-white border border-green-500 rounded px-4 py-2 w-full mb-5 md:mb-0 md:w-[90%]"
        >
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        </div>
        <div className="  w-full md:w-[70%] border-[1.5px] border-green-500 active:border-none  rounded-md outline-none ">
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={handleSearchChange}
          className="border rounded px-4 py-2 w-full"
        />
      </div>
      </div>

      

      <div className="flex flex-col md:flex-row flex-wrap mt-24  gap-5 w-full">
        {filteredProducts.map((product) => (
         <div key={product.id} className="relative flex flex-col w-[90%] mx-auto md:w-[450px] rounded-2xl hover:scale-[1.05] duration-1000 z-10 overflow-hidden  shadow-2xl  shadow-gray-500 bg-white h-[500px] object-cover   ">
         
         <img
           src={product.image_url} alt={product.name}
           className="w-full h-[50%]"
           
         />
         <h1
           className="text-center text-lg font-extrabold w-full flex justify-center gap-3 mx-auto items-center mt-14 ml-0"
           style={{ fontFamily: "monospace" }}
         >
          
           <h1 className="text-start text-lg font-extrabold">
           {product.name}
           </h1>
         </h1>
         

         <div className="flex justify-around items-center gap-3 mt-3 w-[99%] mx-auto lg:mt-10 ">
           <div className="flex gap-1 items-center">
             <FaStar className="text-orange-500 text-lg" />
             <FaStar className="text-orange-500 text-lg" />
             <FaStar className="text-orange-500 text-lg" />
             <FaStar className="text-orange-500 text-lg" />
             <FaRegStar className="text-gray-500 text-xl" />
             <span className="text-gray-400 text-sm"> (the rate)</span>
           </div>
           <span className=" text-orange-500 font-extrabold">
           Price: {product.price}E.G
             
           </span>
         </div>

         <div className="w-full flex justify-around items-center mt-10">
 <NavLink to={`/products/${product.id}`}> <FaEye className='text-green-400 hover:text-orange-400' size={30} /></NavLink> 
  <FaShoppingCart className='text-green-400 hover:text-orange-400'  size={30} /> 
  <FaHeart className='text-green-400 hover:text-orange-400' size={30} /> 
</div>




       </div>
        ))}
      </div>

    


    </div>
    </>
  );
}

export default Shop;
