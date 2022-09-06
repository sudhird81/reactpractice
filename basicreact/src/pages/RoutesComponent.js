import React from "react";
import { Routes, Route } from "react-router-dom";
import Student from "./dashboard/Student";
import Principal from "./dashboard/Principal";
import Staff from "./dashboard/Staff";
import Teacher from "./dashboard/Teacher";
const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/student" element={<Student/>} />
      <Route path="/principal" element={<Principal/>} />
      <Route path="/staff" element={<Staff /> } />
      <Route path="/teacher" element={<Teacher/>} />
      <Route path="*" />
    </Routes>
  );
};
export default RoutesComponent;

