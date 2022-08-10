import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import "./index.css";
import { BrowserRouter,Routes, Route  } from "react-router-dom";
import Login from "./components/Login";
import Student from "./pages/dashboard/Student";
import Principal from "./pages/dashboard/Principal";
import Staff from "./pages/dashboard/Staff";
import Teacher from "./pages/dashboard/Teacher";  
// import LayoutComponents from "./LayoutComponents";
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/student" element={<Student/>} />
      <Route path="dashboard/principal" element={<Principal/>} />
      <Route path="dashboard/staff" element={<Staff /> } />
      <Route path="dashboard/teacher" element={<Teacher/>} />
      <Route path="*" />
    </Routes>
        {/* <LayoutComponents /> */}
      
      </BrowserRouter>
    </div>
  );
}
export default App;












