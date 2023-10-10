import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Shop() {


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
  
  
  
    const [vegstates,setvegstates]=useState(true)
    const [fruitsstates,setfruitsstates] =useState(false)
    const [cheesestates,setcheesestates] =useState(false)
    const [daiarystates,setdaiarystates] =useState(false)
    const [meatstates,setmeatstates] =useState(false)
    const [dessertsstates,setdessertsstates] =useState(false)
    const [beveragesTeastate,setbeveragesTeastate] =useState(false)
    const [dataStates,setdataStates] =useState(true)

  
  
  
  
  
    const vegtoggle=()=>{
      setvegstates(!vegstates)
      setfruitsstates(false)
      setcheesestates(false)
      setdaiarystates(false)
      setmeatstates(false)
      setdessertsstates(false)
      setbeveragesTeastate(false)
  
  
    }
    const fruitstoggle=()=>{
      setfruitsstates(!fruitsstates)
      setvegstates(false)
      setcheesestates(false)
      setdaiarystates(false)
      setmeatstates(false)
      setdessertsstates(false)
      setbeveragesTeastate(false)
  
  
  
    }
    const cheesetoggle=()=>{
      setcheesestates(!cheesestates)
      setvegstates(false)
      setfruitsstates(false)
      setdaiarystates(false)
      setmeatstates(false)
      setdessertsstates(false)
      setbeveragesTeastate(false)
  
  
  
  
    }
    const daiarytoggle=()=>{
      setdaiarystates(!daiarystates)
      setvegstates(false)
      setfruitsstates(false)
      setcheesestates(false)
      setmeatstates(false)
      setdessertsstates(false)
      setbeveragesTeastate(false)

  
  
  
    }
    const meattoggle=()=>{
      setmeatstates(!meatstates)
      setvegstates(false)
      setfruitsstates(false)
      setdaiarystates(false)
      setcheesestates(false)
      setdessertsstates(false)
      setbeveragesTeastate(false)

  
  
    }
  
  
    const dessertstoggle=()=>{
      setdessertsstates(!dessertsstates)
      setvegstates(false)
      setfruitsstates(false)
      setdaiarystates(false)
      setcheesestates(false)
      setmeatstates(false)
      setbeveragesTeastate(false)

  
  
  
    }
  
  
    const teatoggle=()=>{
      setbeveragesTeastate(!beveragesTeastate)
      setvegstates(false)
      setfruitsstates(false)
      setdaiarystates(false)
      setcheesestates(false)
      setmeatstates(false)
      setdessertsstates(false)

  
  
  
    }

    

    return (
        <>
    
<div className='w-full flex justify-center items-center gap-5  mt-52 flex-wrap '>

<button onClick={vegtoggle} className=' w-[150px]  rounded-xl bg-green-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-green-400'> vegtables</button>
        <button onClick={fruitstoggle} className=' w-[150px]  rounded-xl bg-green-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-red-400'> fruits</button>
        <button onClick={cheesetoggle} className=' w-[150px]  rounded-xl bg-green-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-blue-400'> cheese</button>
        <button onClick={daiarytoggle} className=' w-[150px]  rounded-xl bg-green-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-blue-400'> daiary</button>
        <button onClick={meattoggle} className=' w-[150px]  rounded-xl bg-green-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-blue-400'> meat</button>
        <button onClick={dessertstoggle} className=' w-[150px]  rounded-xl bg-green-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-blue-400'> desserts</button>
        <button onClick={teatoggle} className=' w-[150px]  rounded-xl bg-green-600 text-white flex items-center justify-center h-[60px] hover:scale-125 duration-1000 hover:bg-blue-400'> beveragesTea</button>


</div>

  



      {vegstates === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-green-400 flex-wrap mt-52 flex-col md:flex-row text-center'>
            {vegtables.map((vegetable) => (
              <div key={vegetable.id} className='w-[90%] md:w-[20%] flex flex-col items-center  shadow-lg h-[400px]
              drop-shadow-2xl shadow-gray rounded-3xl  overflow-hidden  hover:to-green-600 hover:scale-105 transition-transform duration-300'>
                <img src={vegetable.image_url} alt={vegetable.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{vegetable.name}</h2>
                <p className='text-gray-300'>السعر: {vegetable.price}</p>
                <img src={vegetable.image_url} alt={vegetable.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null}



{fruitsstates === true ? (
   <div className='w-full flex items-center justify-center gap-10 text-green-400 flex-wrap mt-52  flex-col md:flex-row text-center'>
   {fruit.map((fruit) => (
     <div key={fruit.id} className='w-[90%] md:w-[20%] flex flex-col items-center  shadow-lg h-[400px] drop-shadow-2xl shadow-gray rounded-3xl  overflow-hidden hover:to-green-600 hover:scale-105 transition-transform duration-300 '>
       <img src={fruit.image_url} alt={fruit.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
 
       <h2 className='text-xl font-semibold'>{fruit.name}</h2>
       <p className='text-gray-300'>السعر: {fruit.price}</p>
       <img src={fruit.image_url} alt={fruit.name} className='w-8 h-8 mt-2 rounded-full' />
     </div>
   ))}
 </div>
):null}



{cheesestates === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-green-400 flex-wrap mt-52 flex-col md:flex-row text-center'>
            {cheese.map((cheese) => (
              <div key={cheese.id} className='w-[90%] md:w-[20%] flex flex-col items-center  shadow-lg h-[400px] drop-shadow-2xl shadow-gray rounded-3xl  overflow-hidden hover:to-green-600 hover:scale-105 transition-transform duration-300 '>
                <img src={cheese.image_url} alt={cheese.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{cheese.name}</h2>
                <p className='text-gray-300'>السعر: {cheese.price}</p>
                <img src={cheese.image_url} alt={cheese.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null}


{daiarystates === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-green-400 flex-wrap mt-52 flex-col md:flex-row text-center'>
            {dairy.map((daiary) => (
              <div key={daiary.id} className='w-[90%] md:w-[20%] flex flex-col items-center  shadow-lg h-[400px] drop-shadow-2xl shadow-gray rounded-3xl  overflow-hidden hover:to-green-600 hover:scale-105 transition-transform duration-300 '>
                <img src={daiary.image_url} alt={daiary.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{daiary.name}</h2>
                <p className='text-gray-300'>السعر: {daiary.price}</p>
                <img src={daiary.image_url} alt={daiary.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null}


{meatstates === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-green-400 flex-wrap mt-52 flex-col md:flex-row text-center'>
            {meat.map((meat) => (
              <div key={meat.id} className='w-[90%] md:w-[20%] flex flex-col items-center  shadow-lg h-[400px] drop-shadow-2xl shadow-gray rounded-3xl  overflow-hidden hover:to-green-600 hover:scale-105 transition-transform duration-300 '>
                <img src={meat.image_url} alt={meat.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{meat.name}</h2>
                <p className='text-gray-300'>السعر: {meat.price}</p>
                <img src={meat.image_url} alt={meat.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null}

{dessertsstates === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-green-400 flex-wrap mt-52 flex-col md:flex-row text-center'>
            {desserts.map((dessert) => (
              <div key={dessert.id} className='w-[90%] md:w-[20%] flex flex-col items-center  shadow-lg h-[400px] drop-shadow-2xl shadow-gray rounded-3xl  overflow-hidden hover:to-green-600 hover:scale-105 transition-transform duration-300 '>
                <img src={dessert.image_url} alt={dessert.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{dessert.name}</h2>
                <p className='text-gray-300'>السعر: {dessert.price}</p>
                <img src={dessert.image_url} alt={dessert.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null}


{beveragesTeastate === true ? (
            <div className='w-full flex items-center justify-center gap-10 text-green-400 flex-wrap mt-52 flex-col md:flex-row text-center'>
            {beveragesTea.map((tea) => (
              <div key={tea.id} className='w-[90%] md:w-[20%] flex flex-col items-center  shadow-lg h-[400px] drop-shadow-2xl shadow-gray rounded-3xl  overflow-hidden hover:to-green-600 hover:scale-105 transition-transform duration-300 '>
                <img src={tea.image_url} alt={tea.name} className='w-full h-[60%] object-cover rounded-md mb-2' />
          
                <h2 className='text-xl font-semibold'>{tea.name}</h2>
                <p className='text-gray-300'>السعر: {tea.price}</p>
                <img src={tea.image_url} alt={tea.name} className='w-8 h-8 mt-2 rounded-full' />
              </div>
            ))}
          </div>
      ):null}
        </>
    );
}

export default Shop;