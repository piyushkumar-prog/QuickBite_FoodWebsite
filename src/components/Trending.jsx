import React from 'react'
export default function Trending() {
    return (
        <div>
            <div className="flex justify-between text-black py-2">
            <p className="text-2xl font-one md:text-6xl mt-14 ml-16 md:ml-96 md:mr-7">Trending Dishes</p>
            </div>
            <div data-aos="zoom-in" data-oas-once="true" data-aos-delay='100' data-aos-duration="6000" data-aos-easing="linear"
             className="container font-third m-auto grid grid-cols-2 md:grid-cols-3 md:ml-16 gap-4">
            <div>
            <img src="photos/chicken.jpg" alt="img" className="hover:-translate--y-1 hover:scale-110 duration-1000 md:w-3/4 md:h-3/4 rounded-2xl w-11/12 h-10/12 mt-10 mb-2 ml-2 border-4 border-yellow-400"/>
            <div className="flex">
            <p className="ml-10 mr-2 md:text-2xl text-sm">Chicken</p>
            </div>
            </div>
            <div>
            <img src="photos/non-veg biryani.jpg" alt="img" className="hover:-translate--y-1 hover:scale-110 duration-1000  md:w-3/4 md:h-3/4 rounded-2xl w-11/12 h-10/12 mt-10 mb-2 ml-2 border-4 border-yellow-400"/>
            <div className="flex">
            <p className="ml-6 md:text-2xl mr-2 text-sm">Chicken Biryani</p>
            </div>
            </div>
            <div>
            <img src="photos/veg-biryani.jpg" alt="img" className="hover:-translate--y-1 hover:scale-110 duration-1000  md:w-3/4 md:h-3/4 rounded-2xl w-11/12 h-10/12 mt-10 mb-2 ml-2 border-4 border-yellow-400"/>
            <div className="flex justify-between">
            <p className="ml-10 md:text-2xl mr-2 text-sm">Veg Biryani</p>
            </div>
            </div>
            <div>
            <img src="photos/paneer.jpg" alt="img" className="hover:-translate--y-1 hover:scale-110 duration-1000  md:w-3/4 md:h-3/4 rounded-2xl w-11/12 h-10/12 md:mt-5 mt-10 mb-2 ml-2 border-4 border-yellow-400"/>
            <div className="flex justify-between">
            <p className="ml-14 md:text-2xl mr-2 text-sm">Paneer</p>
            </div>
            </div>
            <div>
            <img src="photos/burger.jpg" alt="img" className="hover:-translate--y-1 hover:scale-110 duration-1000  md:w-3/4 md:h-3/4 rounded-2xl w-11/12 h-10/12 mt-5 mb-2 ml-2 border-4 border-yellow-400"/>
            <div className="flex justify-between">
            <p className="ml-14 md:text-2xl mr-2 text-sm">Burger</p>
            </div>
            </div>
            <div>
            <img src="photos/pizza.jpg" alt="img" className="hover:-translate--y-1 hover:scale-110 duration-1000  md:w-3/4 md:h-3/4 rounded-2xl w-11/12 h-10/12 mt-5 mb-2 ml-2 border-4 border-yellow-400"/>
            <div className="flex justify-between">
            <p className="ml-14 md:text-2xl mr-2 text-sm">Pizza</p>
            </div>
            </div> 
            <div>
            <img src="photos/rolls.jpg" alt="img" className="hover:-translate--y-1 hover:scale-110 duration-1000  md:w-3/4 md:h-3/4 rounded-2xl w-11/12 h-10/12 mt-5 mb-2 ml-2 border-4 border-yellow-400"/>
            <div className="flex justify-between">
            <p className="ml-14 md:text-2xl mr-2 text-sm">Rolls</p>
            </div>
            </div>
            <div>
            <img src="photos/momos.jpg" alt="img" className="hover:-translate--y-1 hover:scale-110 duration-1000  md:w-3/4 md:h-3/4 rounded-2xl w-11/12 h-10/12 mt-5 mb-2 ml-2 border-4 border-yellow-400"/>
            <div className="flex justify-between">
            <p className="ml-14 md:text-2xl mr-2 text-sm">Momos</p>
            </div>
            </div>
            <div>
            <img src="photos/pastry.jpg" alt="img" className="hover:-translate--y-1 hover:scale-110 duration-1000  md:w-3/4 md:h-3/4 rounded-2xl w-11/12 h-10/12 mt-5 mb-2 ml-2 border-4 border-yellow-400"/>
            <div className="flex justify-between">
            <p className="ml-14 md:text-2xl mr-2 text-sm">Pastry</p>
            </div>
            </div>
        </div> 
    </div>
    )
  }