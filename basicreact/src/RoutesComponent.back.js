import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import SignModal from "./components/SignModal";
import ContactModal from "./components/ContactModal";
import Protected from "./components/Protected";
// import PrivateRoute from "./components/PrivateRoute";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<<<<<<< HEAD:basicreact/src/RoutesComponent.js
      <Route path="/about" element={<About />} />
      <Route path="/contactmodal" element={<ContactModal />} />
      <Route path="/signmodal" element={<SignModal />} />
=======
      <Route path="/about" element={<About/>} />
      <Route path="/contactmodal" element={<ContactModal /> } />
      {/* <Route path="/signmodal" element={<SignModal/>} /> */}
>>>>>>> a39d2344d485de3a04549c385297aaeb1120805f:basicreact/src/RoutesComponent.back.js
      <Route path="*" />
    </Routes>
  );
};

export default RoutesComponent;
