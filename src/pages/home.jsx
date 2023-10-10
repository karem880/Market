import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../component/NavBar';
import axios from 'axios';
import { MdShoppingCart } from 'react-icons/md';

import Slider from 'react-slick';
import ComplexTouchGallery from './slider';
import CustomSlider from './slider';
import CustomMarketSlider from './slider';
import CustomSwiperSlider from './slider';

function Home() {
  const [data,setdata] =useState([])
  const [vegtables,setvegtables] =useState([])
  const [fruit,setfruit] =useState([])
  const [cheese,setcheese] =useState([])
  const [dairy,setdairy] =useState([])
  const [meat,setmeat] =useState([])
  const [desserts,setdesserts] =useState([])
  const [beveragesTea,setbeveragesTea] =useState([])








  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get("/src/data/db.json");
        console.log(response.data);
        setdata(response.data);
        setfruit(response.data.products.fruits);
        setvegtables(response.data.products.vegetables);
        setcheese(response.data.products.cheese);
        setdairy(response.data.products.dairy);
        setmeat(response.data.products.meat);
        setdesserts(response.data.products.desserts)
        setbeveragesTea(response.data.products.beverages.beveragesTea.productsBeverages)
               
      } catch (error) {
        console.error('حدث خطأ أثناء جلب البيانات:', error);
      }
    };

    fetchdata();
  }, []);



  const [vegstates,setvegstates]=useState(false)
  const [fruitsstates,setfruitsstates] =useState(false)
  const [cheesestates,setcheesestates] =useState(false)
  const [daiarystates,setdaiarystates] =useState(false)
  const [meatstates,setmeatstates] =useState(false)
  const [dessertsstates,setdessertsstates] =useState(false)
  const [beveragesTeastate,setbeveragesTeastate] =useState(false)





  // const vegtoggle=()=>{
  //   setvegstates(!vegstates)
  //   setfruitsstates(false)
  //   setcheesestates(false)
  //   setdaiarystates(false)
  //   setmeatstates(false)
  //   setdessertsstates(false)
  //   setbeveragesTeastate(false)


  // }
  // const fruitstoggle=()=>{
  //   setfruitsstates(!fruitsstates)
  //   setvegstates(false)
  //   setcheesestates(false)
  //   setdaiarystates(false)
  //   setmeatstates(false)
  //   setdessertsstates(false)
  //   setbeveragesTeastate(false)



  // }
  // const cheesetoggle=()=>{
  //   setcheesestates(!cheesestates)
  //   setvegstates(false)
  //   setfruitsstates(false)
  //   setdaiarystates(false)
  //   setmeatstates(false)
  //   setdessertsstates(false)
  //   setbeveragesTeastate(false)




  // }
  // const daiarytoggle=()=>{
  //   setdaiarystates(!daiarystates)
  //   setvegstates(false)
  //   setfruitsstates(false)
  //   setcheesestates(false)
  //   setmeatstates(false)
  //   setdessertsstates(false)
  //   setbeveragesTeastate(false)



  // }
  // const meattoggle=()=>{
  //   setmeatstates(!meatstates)
  //   setvegstates(false)
  //   setfruitsstates(false)
  //   setdaiarystates(false)
  //   setcheesestates(false)
  //   setdessertsstates(false)
  //   setbeveragesTeastate(false)


  // }


  // const dessertstoggle=()=>{
  //   setdessertsstates(!dessertsstates)
  //   setvegstates(false)
  //   setfruitsstates(false)
  //   setdaiarystates(false)
  //   setcheesestates(false)
  //   setmeatstates(false)
  //   setbeveragesTeastate(false)



  // }


  // const teatoggle=()=>{
  //   setbeveragesTeastate(!beveragesTeastate)
  //   setvegstates(false)
  //   setfruitsstates(false)
  //   setdaiarystates(false)
  //   setcheesestates(false)
  //   setmeatstates(false)
  //   setdessertsstates(false)



  // }

  



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



<section className='relative flex flex-col md:flex-row gap-10 w-full h-[80vh] mt-44'>
  <div className='w-full md:w-[70%] h-[100%]'>
    <div className='h-full bg-cover relative border-dashed border border-green-500 flex-col rounded-2xl bg-current flex items-center  justify-center py-5 text-2xl font-extrabold text-green-600' style={{ backgroundImage: 'url("./assets/Home.png")' }}>
      {/* Content for the first div */}
      <p>Discover the Hidden Treasures</p>
      <p className="text-xl font-semibold mt-4">Explore our exquisite collection of fresh and premium products.</p>
      <button className='w-[70%] md:w-[50%] text-xl font-bold p-3 bg-green-600 text-white flex items-center justify-center h-[50px] rounded-lg mt-6 hover:bg-green-700 transition duration-300 ease-in-out'>Explore Market</button>

    </div>
  </div>

  <div className='w-full md:w-[30%] flex flex-col gap-5 h-full '>
   
    
    <div className='h-[50%] bg-cover relative text-center  border-dashed border border-green-500 flex-col rounded-2xl bg-current flex items-center  justify-center py-5 text-2xl font-extrabold text-green-600' style={{ backgroundImage: 'url("./assets/onion.png")' }}>
      {/* Content for the first div */}
      <p>Discover the Hidden Treasures</p>
      <p className="text-xl font-semibold mt-4">Explore our exquisite collection of fresh and premium products.</p>
      <button className=' absolute top-[-40px] left-[-10px] rounded-full  text-xl font-bold p-3 bg-yellow-400 w-[50px] h-[50px] text-white flex items-center justify-center   mt-6 hover:bg-yellow-700 transition duration-300 ease-in-out'>-50%</button>

    </div>



    <div className='h-[50%] bg-cover relative border-dashed border text-center  border-green-500 flex-col rounded-2xl bg-current flex items-center  justify-center py-5 text-2xl font-extrabold text-green-600' style={{ backgroundImage: 'url("./assets/felfel.png")' }}>
      {/* Content for the first div */}
      <p>Discover the Hidden Treasures</p>
      <p className="text-xl font-semibold mt-4">Explore our exquisite collection of fresh and premium products.</p>
      <button className=' absolute top-[-40px] left-[-10px] rounded-full  text-xl font-bold p-3 bg-green-600 w-[50px] h-[50px] text-white flex items-center justify-center   mt-6 hover:bg-green-700 transition duration-300 ease-in-out'>-50%</button>
 
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



      {/* <div className='w-full flex justify-center gap-10 flex-col md:flex-row  mt-52 flex-wrap '>
        <button onClick={vegtoggle} className=' w-[80] md:w-[20%] rounded-xl bg-green-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-green-400'>show vegtables</button>
        <button onClick={fruitstoggle} className=' w-[80] md:w-[20%] rounded-xl bg-red-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-red-400'>show fruits</button>
        <button onClick={cheesetoggle} className=' w-[80] md:w-[20%] rounded-xl bg-blue-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-blue-400'>show cheese</button>
        <button onClick={daiarytoggle} className=' w-[80] md:w-[20%] rounded-xl bg-blue-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-blue-400'>show daiary</button>
        <button onClick={meattoggle} className=' w-[80] md:w-[20%] rounded-xl bg-blue-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-blue-400'>show meat</button>
        <button onClick={dessertstoggle} className=' w-[80] md:w-[20%] rounded-xl bg-blue-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-blue-400'>show desserts</button>
        <button onClick={teatoggle} className=' w-[80] md:w-[20%] rounded-xl bg-blue-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-blue-400'>show beveragesTea</button>

      </div>
      {vegstates === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-white flex-wrap mt-52 flex-col md:flex-row'>
            {vegtables.map((vegetable) => (
              <div key={vegetable.id} className='w-[90%] md:w-[20%] flex flex-col items-center rounded-lg shadow-lg h-[400px]
               bg-gradient-to-l from-gray-400 to-slate-500 hover:from-blue-400 hover:to-green-600 hover:scale-105 transition-transform duration-300'>
                <img src={vegetable.image_url} alt={vegetable.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{vegetable.name}</h2>
                <p className='text-gray-300'>السعر: {vegetable.price}</p>
                <img src={vegetable.image_url} alt={vegetable.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null}



{fruitsstates === true ? (
   <div className='w-full flex items-center justify-center gap-10 text-white flex-wrap mt-52  flex-col md:flex-row'>
   {fruit.map((fruit) => (
     <div key={fruit.id} className='w-[90%] md:w-[20%] flex flex-col items-center rounded-lg shadow-lg h-[400px]  bg-gradient-to-l from-gray-400 to-slate-500 hover:from-blue-400 hover:to-green-600 hover:scale-105 transition-transform duration-300'>
       <img src={fruit.image_url} alt={fruit.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
 
       <h2 className='text-xl font-semibold'>{fruit.name}</h2>
       <p className='text-gray-300'>السعر: {fruit.price}</p>
       <img src={fruit.image_url} alt={fruit.name} className='w-8 h-8 mt-2 rounded-full' />
     </div>
   ))}
 </div>
):null}



{cheesestates === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-white flex-wrap mt-52 flex-col md:flex-row'>
            {cheese.map((cheese) => (
              <div key={cheese.id} className='w-[90%] md:w-[20%] flex flex-col items-center rounded-lg shadow-lg h-[400px]  bg-gradient-to-l from-gray-400 to-slate-500 hover:from-blue-400 hover:to-green-600 hover:scale-105 transition-transform duration-300'>
                <img src={cheese.image_url} alt={cheese.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{cheese.name}</h2>
                <p className='text-gray-300'>السعر: {cheese.price}</p>
                <img src={cheese.image_url} alt={cheese.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null}


{daiarystates === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-white flex-wrap mt-52 flex-col md:flex-row'>
            {dairy.map((daiary) => (
              <div key={daiary.id} className='w-[90%] md:w-[20%] flex flex-col items-center rounded-lg shadow-lg h-[400px]  bg-gradient-to-l from-gray-400 to-slate-500 hover:from-blue-400 hover:to-green-600 hover:scale-105 transition-transform duration-300'>
                <img src={daiary.image_url} alt={daiary.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{daiary.name}</h2>
                <p className='text-gray-300'>السعر: {daiary.price}</p>
                <img src={daiary.image_url} alt={daiary.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null}


{meatstates === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-white flex-wrap mt-52 flex-col md:flex-row'>
            {meat.map((meat) => (
              <div key={meat.id} className='w-[90%] md:w-[20%] flex flex-col items-center rounded-lg shadow-lg h-[400px]  bg-gradient-to-l from-gray-400 to-slate-500 hover:from-blue-400 hover:to-green-600 hover:scale-105 transition-transform duration-300'>
                <img src={meat.image_url} alt={meat.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{meat.name}</h2>
                <p className='text-gray-300'>السعر: {meat.price}</p>
                <img src={meat.image_url} alt={meat.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null}

{dessertsstates === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-white flex-wrap mt-52 flex-col md:flex-row'>
            {desserts.map((dessert) => (
              <div key={dessert.id} className='w-[90%] md:w-[20%] flex flex-col items-center rounded-lg shadow-lg h-[400px]  bg-gradient-to-l from-gray-400 to-slate-500 hover:from-blue-400 hover:to-green-600 hover:scale-105 transition-transform duration-300'>
                <img src={dessert.image_url} alt={dessert.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{dessert.name}</h2>
                <p className='text-gray-300'>السعر: {dessert.price}</p>
                <img src={dessert.image_url} alt={dessert.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null}


{beveragesTeastate === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-white flex-wrap mt-52 flex-col md:flex-row'>
            {beveragesTea.map((tea) => (
              <div key={tea.id} className='w-[90%] md:w-[20%] flex flex-col items-center rounded-lg shadow-lg h-[400px]  bg-gradient-to-l from-gray-400 to-slate-500 hover:from-blue-400 hover:to-green-600 hover:scale-105 transition-transform duration-300'>
                <img src={tea.image_url} alt={tea.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{tea.name}</h2>
                <p className='text-gray-300'>السعر: {tea.price}</p>
                <img src={tea.image_url} alt={tea.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null} */}



      
    
    </>
  );
}

export default Home;
