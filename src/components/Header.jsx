import React from 'react'


export default function Header() {
    return (
    <>
      <header className='md:flex ml-5'>
            <div data-aos="zoom-in-up" data-oas-once="true" data-aos-delay='100' data-aos-duration="600" data-aos-easing="ease-in" >
               <img src="photos/img.png" alt="img" className="md:ml-20 ml-10 sm:w-80 sm:h-80 rounded-3xl w-40 h-40 ml-1"/>
            </div>
            <div data-aos="fade-up-left" data-oas-once="true" data-aos-delay='100' data-aos-duration="600" data-aos-easing="linear" className='text-black ml-6 text-xl'>
                <p className="flex font-third text-3xl md:text-6xl md:ml-44 md:w-96" >All categories of</p>
                <p className="flex font-third text-yellow-400 text-3xl md:text-6xl md:ml-44 md:w-96" >foods</p>
                <p className="flex font-third text-3xl md:text-6xl md:ml-44 md:w-96" >are available</p>
                <p className="flex font-third text-3xl text-red-500 md:text-white md:text-6xl md:ml-44 md:w-96" >here</p>
                <div data-aos="zoom-in-up" data-oas-once="true" data-aos-delay='100' data-aos-duration="600" data-aos-easing="linear">
                <button className='hover:bg-black hover:text-white font-semibold md:ml-44 w-32 h-14 font-one cursor-pointer flex bg-yellow-400 p-2 rounded-full 
              transition ease-in-out delay-150  
             hover:-translate--y-1 hover:scale-110 duration-300 ... px-3 py-1 backdrop-filter 
             backdrop-blur text-xl mt-10 items-center '>Order Now</button>
            </div>
            </div>
            
        </header>
     </>
    )
  }