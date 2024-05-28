import React from "react"
import Navbar from "./Navbar"
import Mid from "./mid"
import Header from "./Header"
import Menu from "./Menu"
import Trending from "./Trending"



function Home() {
   
  return (
    <> 
        <Navbar/>
        <Header/>
        <Mid/>
        <Menu/>
        <Trending/>
    </>
  )
}

export default Home;
