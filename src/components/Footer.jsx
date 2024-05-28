import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
    return (
      <footer className="mt-20 justify-between text-white bg-black py-2">
         <div className="logo ml-12">
            <span className='font-bold text-xl mx-8'><img src="photos/logo.png" alt="logo" className="w-20 h-15 md:ml-6 ml-2"/></span>
            <p className="md:ml-6 ml-2 mb-2 font-bold text-lg">QuickBite</p>
         </div>
         <div className="flex md:ml-20 ml-14">
         <ul className="text-xs mr-20 ">

          <li className='mt-3 text-gray-400 font-one cursor-pointer flex'>COMPANY</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-yellow-400'>About</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-yellow-400'>Contact</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-yellow-400'>Jobs</li>
          </ul>

        <ul className="text-xs mr-24 ">

          <li className='mt-3 text-gray-400 font-one cursor-pointer flex'>USEFUL LINKS</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-yellow-400'>Support</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-yellow-400'>Partner with us</li>

          <li className='mt-3 font-one cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300 text-sm hover:underline underline-offset-8 decoration-4 decoration-yellow-400'>Mobile App</li>
        </ul>
        <ul className="hidden md:flex gap-10 text-xl  md:ml-64 mt-5">
          <li className='mt-10 cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300'><AiFillInstagram /></li>

          <li className='mt-10 cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300'><FaXTwitter /></li>

          <li className='mt-10 cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300'><BsFacebook /></li>
        </ul>
        </div>
        <p className='mt-10 md:hidden ml-12 text-xs text-gray-400 font-one cursor-pointer flex'>SOCIAL LINKS</p>
        <ul className= "grid md:hidden grid-cols-3 gap-2 ml-12 text-xl mr-24 mt-5">

          <li className='mt-3 cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300'><AiFillInstagram /></li>

          <li className='mt-3 cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300'><FaXTwitter /></li>

          <li className='mt-3 cursor-pointer flex transition ease-in-out delay-300 
           hover:-translate--y-1 hover:scale-110 duration-300'><BsFacebook /></li>
        </ul>
        <div>
            <ul className="text-xs flex gap-5 mt-10 md:ml-20 ml-4 ">

              <li className='mt-3 text-gray-400 font-one cursor-pointer flex transition ease-in-out delay-300 
                hover:-translate--y-1 hover:scale-110 duration-300'>Legal</li>
               <li className='mt-3 text-gray-400 font-one cursor-pointer flex transition ease-in-out delay-300 
                hover:-translate--y-1 hover:scale-110 duration-300'>Safety & Privacy Center
                </li>
                <li className='mt-3 text-gray-400 font-one cursor-pointer flex transition ease-in-out delay-300 
                hover:-translate--y-1 hover:scale-110 duration-300'>Privacy Policies</li>

            </ul>
        </div>
        <div>
          <p className='mt-5 text-xs font-third flex ml-20 text-gray-400 cursor-pointer'>© 2024 QUICKBITE</p>
        </div>
      </footer>
    )
}