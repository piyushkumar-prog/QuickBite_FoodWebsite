// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Signinpage from './Signinpage';
import Signup from './Signup';
import Aboutus from './Aboutus';
import Footer from './Footer';

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Signinpage" element={<Signinpage/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Aboutus" element={<Aboutus/>}/>
      </Routes>
    </Router>
  );
};

export default Routers;
