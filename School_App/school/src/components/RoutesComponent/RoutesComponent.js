
import { Routes, Route  } from "react-router-dom";
import Login from "../../pages/Login";
import Student from "../../pages/Student";
import Principal from "../../pages/Principal";
import Staff from "../../pages/Staff";
import Teacher from "../../pages/Teacher"; 
import MainHeader from "../LayoutComponent/MainHeader";
import MainLayout from "../MainLayout";
import StudentList from "../../pages/StudentList";




function RoutesComponent() {
  return (
    <div>
    
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/student" element={<Student/>} />
        <Route path="/dashboard"  element={<MainLayout/>} />
        <Route path="/staff" element={<Staff /> } />
        <Route path="/teacher" element={<Teacher/>} />
        <Route path="/StudentList" key ="StudentList"  element={<StudentList/>} />
 
        
        <Route path="*" />
    </Routes>
       
      
      
    </div>
  );
}
export default RoutesComponent;








