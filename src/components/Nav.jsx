import React, { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

function App() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="flex items-center justify-between flex-wrap p-6">
     <div className="block md:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <div
           className={`h-3 w-3 ml-32 ${isOpen ? "hidden" : "block"}`}
         >
          <RiMenu3Line />
         </div>

         <div
           className={`h-3 w-3 ml-32 ${isOpen ? "block" : "hidden"}`}
         >
          <IoMdClose />
         </div>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm w-44 rounded-md p-4 bg-slate-900">
         <p className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Home
         </p>
         <p className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Premium
         </p>
         <p className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Offers
         </p>
         <p className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
           Menu
         </p>
         <p className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
         <Link to="/Aboutus">About Us</Link>
         </p>
         <p className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
         <Link to="/Signinpage">Sign In</Link>
         </p>
         <p className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4">
         <Link to="/Signup">Sign Up</Link>
         </p>
       </div>
     </div>
   </nav>
 );
}
export default App;