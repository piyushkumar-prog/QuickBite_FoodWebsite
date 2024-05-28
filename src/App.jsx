import React from "react"
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import Routers from "./components/Routers";

function App() {
   React.useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 700,
      easing: 'ease-in',
      delay: 100,
    });
    AOS.refresh();
   });
   
  return (
    <main className="over-x-hidden"> 
    <div>
      <Routers/>
      <Footer/>
    </div>
    </main>
  )
}

export default App
