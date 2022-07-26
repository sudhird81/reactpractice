import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" />
      {/* <Route path="/contact1" element={<Contact1 /> } />
      <Route path="/crudfunction" element={<CrudFuntion /> } /> */}
    </Routes>
  );
};

export default RoutesComponent;
