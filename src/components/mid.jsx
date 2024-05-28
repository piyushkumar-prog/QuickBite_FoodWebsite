import React from 'react'
import { MdOutlineDeliveryDining } from "react-icons/md";
import { IoMdStopwatch } from "react-icons/io";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiSearchFill } from "react-icons/ri";
export default function Mid() {
    return (
      <>
         <div data-aos="zoom-in-up" data-oas-once="true" data-aos-delay='100' data-aos-duration="600" data-aos-easing="ease-in"
          className="md:hidden md:w-3/4 h-20 font-third gap-10 w-11/19 mr-4  ml-4 bg-white rounded-xl mt-5 ">
            <div className="md:gap-30 md:ml-28 grid grid-cols-3 ml-8 gap-10 bg-white rounded-xl mt-5">
            <div className="bg-slate-600 mt-2 rounded-full text-white text-2xl pl-2 pt-2 w-10 h-10" ><IoFastFoodOutline/></div>
            <div className="bg-slate-600 mt-2 rounded-full  text-white text-2xl pl-2 pt-2 w-10 h-10" ><IoMdStopwatch/></div>
            <div className="bg-slate-600 mt-2  rounded-full  text-white text-2xl pl-2 pt-2 w-10 h-10" ><MdOutlineDeliveryDining/></div>
            </div>
            <div className="grid grid-cols-3 ml-4 md:ml-28">
            <div className="text-sm mb-1"><span>Fresh Food</span></div>
            <div className="text-sm mb-1"><span>Fast Delivery</span></div>
            <div className="text-sm mb-1"><span>Free Delivery</span></div>
            </div>
         </div>
           
         <div data-aos="zoom-in-up" data-oas-once="true" data-aos-delay='100' data-aos-duration="600" data-aos-easing="ease-in" className="hidden md:mt-40 md:block md:w-3/4 md:ml-36 md:h-20 md:w-11/19 md:mr-4 md: bg-white md:rounded-xl">
            <div className="md:gap-0 md:grid md:grid-cols-3 md:ml-28 md: bg-white md:rounded-xl md:mt-5">
            <div>
            <div className="md:bg-slate-600 md:mt-2 md:rounded-full md:w-10 md:h-10" ><div className="md:text-2xl md:pt-1.5 md:pl-1 md:mt-3 text-white md:ml-1"><IoFastFoodOutline /></div></div>
            <div className="text-sm mb-1"><span>Fresh Food</span>
            </div>
            </div>
            <div>
            <div className="md:bg-slate-600 md:mt-2 md:rounded-full md:w-10 md:h-10" ><div className="md:text-2xl md:mt-3 md:pt-2 md:pl-1 text-white md:ml-1"><IoMdStopwatch /></div></div>
            <div className="text-sm mb-1"><span>Fast Delivery</span></div>
            </div>
            <div>
            <div className="md:bg-slate-600 md:mt-2  md:rounded-full md:w-10 md:h-10 " ><div className="md:text-3xl md:pt-1 md:mt-3 text-white md:ml-1"><MdOutlineDeliveryDining/></div></div>
            <div className="text-sm mb-1"><span>Free Delivery</span></div>
            </div>
            </div>
            <div className="md:hidden grid grid-cols-3 ml-4 md:ml-28">
            <div className="text-sm mb-1"><span>Fast Delivery</span></div>
            <div className="text-sm mb-1"><span>Fresh Food</span></div>
            <div className="text-sm mb-1"><span>Free Delivery</span></div>
            </div>
         </div>

            <div>
               <input className="h-8 md:h-10 md:w-1/2 w-9/5 ml-10 md:ml-72 bg-white rounded-3xl mt-10 border-0 "></input>
                <button className="bg-[#fc644a] md:h-10 md:pl-3 md:text-2xl md:ml-auto md:w-12 mb-10 ml-auto rounded-full text-lg pl-2.5 h-8 w-10 "><RiSearchFill/></button>
         </div>
      </>
    )
  }