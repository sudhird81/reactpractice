import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
 import Contact from "./components/Contact";
 import Contact1 from "./components/Contact1";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" />
      <Route path="/contact" element={<Contact /> } />
      <Route path="/contact1" element={<Contact1 /> } />
    </Routes>
  );
};

export default RoutesComponent;
