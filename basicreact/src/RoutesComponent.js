import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignUp1 from "./components/SignUp1";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="*" />
      <Route path="/signup1" element={<SignUp1/>} />
    </Routes>
  );
};

export default RoutesComponent;
