import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import SignModal from "./components/SignModal";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact /> } />
      <Route path="/signmodal" element={<SignModal/>} />
      <Route path="*" />
    </Routes>
  );
};

export default RoutesComponent;
