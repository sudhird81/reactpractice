import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import  Login from "./components/Login";
 import Contact from "./components/Contact";
 import Contact1 from "./components/Contact1";
import CrudFuntion from "./components/CrudFuntion";
const RoutesComponent = () => {
  return (
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="*" />
      <Route path="/login" element={<Login/>} />
      {/* <Route path="/contact" element={<Contact /> } />
      <Route path="/contact1" element={<Contact1 /> } />
      <Route path="/crudfunction" element={<CrudFuntion /> } /> */}
      
    </Routes>
  );
};

export default RoutesComponent;
