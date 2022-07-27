import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import SignModal from "./components/SignModal";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact /> } />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/signmodal" element={<SignModal/>} />
      <Route path="*" />
      {/* <Route path="/contact1" element={<Contact1 /> } />
      <Route path="/crudfunction" element={<CrudFuntion /> } /> */}
    </Routes>
  );
};

export default RoutesComponent;
