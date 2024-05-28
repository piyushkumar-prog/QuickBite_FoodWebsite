import React from 'react'
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
export default function Signup() {
    return (
      <>
        <div>
            <div className=" hidden bg-slate-100 rounded-2xl w-1/2 h-1/2 md:grid place-items-top  ml-72 mt-10 mb-10">
             <div className="font-one text-4xl ml-60 mt-20 mb-10">Sign Up</div>
             <div className="mb-20">
             <input placeholder='Email' className="bg-slate-200 w-4/5 h-12 ml-16 pl-6 rounded-xl mb-8" ></input>
             <input placeholder='Password' className="bg-slate-200 w-4/5 h-12 ml-16 pl-6 rounded-xl mb-6" ></input>
             <button className="bg-black w-1/4 text-white h-12 ml-52 rounded-xl mb-4">Sign Up</button>
             <p  className="ml-44 mb-6">Already have an account? <Link to="/signinpage"><span className="underline font-medium">Sign In</span></Link></p>
             <p className="ml-44">---------------or----------------</p>
              <div>
              <button className="ml-64 mt-6 w-30 h-10"><FcGoogle className="w-10 h-10"/></button>
              
              </div>
             

             </div>
            </div>

        </div>

        <div>
            <div className=" bg-slate-100 md:hidden rounded-2xl w-3/4 h-1/2 grid place-items-top  ml-10 mt-10 mb-10">
             <div className="font-one text-2xl ml-16 mt-20 mb-10">Sign Up</div>
             <div className="mb-20">
             <input placeholder='Email' className="bg-slate-200 w-3/4 h-10 ml-7 pl-6 rounded-xl mb-4" ></input>
             <input placeholder='Password' className="bg-slate-200 w-3/4 h-10 ml-7 pl-6 rounded-xl mb-4" ></input>
             <button className="bg-black w-1/2 text-white h-8 ml-14 rounded-xl mb-4">Sign Up</button>
             <p  className="ml-4 text-sm">Already have an account? <Link to="/signinpage"><span className="underline font-medium">Sign In</span></Link></p>
             <p className="ml-8">-----------or------------</p>
              <div>
              <button className="ml-24 mt-4"><FcGoogle className="w-8 h-8"/></button>
              
              </div>
             

             </div>
            </div>

        </div>
      </>
     )
  }