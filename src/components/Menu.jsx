import React from 'react'
export default function Menu() {
    return (
    <div>
        <div className="flex justify-between text-black py-2">
           <p className="text-2xl font-one md:text-6xl md:ml-80 mt-14 ml-12">Our Best Categories</p>
        </div>
        <div data-aos="slide-right" data-oas-once="true" data-aos-delay='100' data-aos-duration="600" data-aos-easing="ease-in"
         className="font-third grid-cols-4 gap-10 md:hidden">

            <img src="photos/non-veg.jpg" alt="img" className="rounded-2xl w-2/3 h-full mt-10 mb-2 ml-12 border-4 border-yellow-400"/>
            <div className="flex justify-between">
            <p className="ml-16">Non-Veg</p><button className='hover:bg-black hover:text-white delay-300 w-28 h-8 bg-yellow-400 mr-16 rounded-2xl'>Order Now</button>
            </div>
            <img src="photos/veg.jpg" alt="img" className="rounded-2xl w-2/3 h-full mt-10 mb-2 ml-12 border-4 border-yellow-400"/>
            <div className="flex justify-between">
            <p className="ml-24">Veg</p><button className='hover:bg-black hover:text-white delay-300 w-28 h-8 bg-yellow-400 mr-16 rounded-2xl'>Order Now</button>
            </div>
            <img src="photos/fast food.jpg" alt="img" className="rounded-2xl w-2/3 h-full mt-10 mb-2 ml-12 border-4 border-yellow-400"/>
            <div className="flex justify-between">
            <p className="ml-12">Fast Food</p><button className='hover:bg-black hover:text-white delay-300 w-28 h-8 bg-yellow-400 mr-16 rounded-2xl'>Order Now</button>
            </div>
            <img src="photos/sweets.jpg" alt="img" className="rounded-2xl w-2/3 h-full mt-10 mb-2 ml-12 border-4 border-yellow-400"/>
            <div className="flex justify-between">
            <p className="ml-16">Sweets</p><button className='hover:bg-black hover:text-white delay-300 w-28 h-8 bg-yellow-400 mr-16 rounded-2xl'>Order Now</button>
            </div>
          </div> 
           


           
          <div  data-aos="zoom-in" data-oas-once="true" data-aos-delay='100' data-aos-duration="6000" data-aos-easing="linear"
           className="md:container font-third md:m-auto md:grid md:grid-cols-2 gap-10 hidden">
            <div>
            <div>
            <img src="photos/non-veg.jpg" alt="img" className="mb-6 shadow-xl hover:-translate--y-1 hover:scale-110 duration-1000 md:w-3/4 md:h-3/4 rounded-2xl w-2/3 h-full mt-10 mb-2 ml-12 border-4 border-yellow-400"/>
            </div>
            <div className="flex">
            <p className="ml-44 mr-2 text-3xl ">Non-Veg</p><button className='hover:bg-black hover:text-white delay-300 font-medium  w-28 h-8 bg-yellow-400 mr-16 rounded-2xl'>Order Now</button>
            </div>
            <div>
            <img src="photos/veg.jpg" alt="img" className="mb-6 hover:-translate--y-1 hover:scale-110 duration-1000 md:w-3/4 md:h-3/4 rounded-2xl w-2/3 h-full mt-10 mb-2 ml-12 border-4 border-yellow-400"/>
            </div>
            <div className="flex">
            <p className="ml-48 text-3xl mr-2">Veg</p><button className='hover:bg-black hover:text-white delay-300 font-medium w-28 h-8 bg-yellow-400 mr-16 rounded-2xl'>Order Now</button>
            </div>
            </div>
            <div>
            <div>
            <img src="photos/fast food.jpg" alt="img" className="hover:-translate--y-1 hover:scale-110 duration-1000 mb-6 md:w-3/4 md:h-3/4 rounded-2xl w-2/3 h-full mt-10 mb-2 ml-12 border-4 border-yellow-400"/>
            </div>
            <div className="flex justify-between">
            <p className="ml-28 mr-2 text-3xl ">Fast Food</p><button className='hover:bg-black hover:text-white delay-300 font-medium w-28 h-8 bg-yellow-400 mr-48 rounded-2xl'>Order Now</button>
            </div>
            <div>
            <img src="photos/sweets.jpg" alt="img" className="hover:-translate--y-1 hover:scale-110 duration-1000 mb-6 md:w-3/4 md:h-3/4 rounded-2xl w-2/3 h-full mt-10 mb-2 ml-12 border-4 border-yellow-400"/>
            </div>
            <div className="flex justify-between">
            <p className="ml-44 mr-2 text-3xl ">Sweets</p><button className='hover:bg-black hover:text-white delay-300 font-medium w-28 h-8 bg-yellow-400 mr-48 rounded-2xl'>Order Now</button>
            </div> 
            </div>

      </div>
    </div>
    )
  }