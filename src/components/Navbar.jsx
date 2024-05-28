import React from 'react'
import { Link } from 'react-router-dom';
import { IoBagHandle } from "react-icons/io5";
import { RiSearchFill } from "react-icons/ri";
import Nav from "./Nav"

export default function Navbar() {
    return (
      <>
      <nav className="hidden md:flex justify-between text-white py-2">
      <div className="logo">
         <span className='font-bold text-xl ml-10'><img src="photos/logo.png" alt="logo" className="w-20 h-20 ml-10"/></span>
         <p className="ml-8 font-bold text-xl">QuickBite</p>
      </div>
     <ul data-aos="fade-down" data-oas-once="true" data-aos-delay='100' data-aos-duration="10000" data-aos-easing="linear" className="flex gap-10 mx-9 text-sm mr-24">

       <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
       hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-yellow-400'>Home</li>

       <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
       hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-yellow-400'>Offers</li>

       <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
       hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-yellow-400'>Premium</li>

       <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
       hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-yellow-400'>Menu</li>

       <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
       hover:-translate--y-1 hover:scale-110 duration-300 text-lg hover:underline underline-offset-8 decoration-4 decoration-yellow-400'><Link to="/Aboutus">About Us</Link></li>
        
        <div className="bg-white rounded-3xl h-10 mt-2 w-20">
         <div className="text-black m-2 m-auto pt-1.5 pl-1.5 grid grid-cols-2 text-2xl"><IoBagHandle/><RiSearchFill/> </div>
        </div>

       <li className='mt-3  text-white rounded-2xl w-24 h-8 pl-6 font-one cursor-pointer flex transition ease-in-out delay-300 
       hover:-translate--y-1 hover:scale-110 duration-300 text-lg bg-black'><Link to="/Signinpage">Sign In</Link></li>
        
       <li className='mt-3  text-black rounded-2xl w-24 h-8 pl-4 font-one cursor-pointer flex transition ease-in-out delay-300 
       hover:-translate--y-1 hover:scale-110 duration-300 text-lg bg-white'><Link to="/Signup">Sign Up</Link></li>
     </ul>
   </nav>




<nav className="md:hidden flex justify-between text-white py-2">
<div className="logo">
   <span className='font-bold text-xl'><img src="photos/logo.png" alt="logo" className="w-10 h-15 ml-5"/></span>
   <p className="ml-2 font-bold text-lg">QuickBite</p>
</div>
<ul data-aos="fade-down" data-oas-once="true" data-aos-delay='100' data-aos-duration="10000" data-aos-easing="linear"
 className="flex gap-2 mx-1 text-sm ">
 <li><Nav/></li>
</ul>
</nav>
   </>
    )
  }