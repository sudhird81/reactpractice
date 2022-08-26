
import { Routes, Route  } from "react-router-dom";
import Login from "../../pages/Login";
import Student from "../../pages/Student";
import Principal from "../../pages/Principal";
import Staff from "../../pages/Staff";
import Teacher from "../../pages/Teacher"; 



function RoutesComponent() {
  return (
    <div>
    
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/student" element={<Student/>} />
        <Route path="/principal"  element={<Principal/>} />
        <Route path="/staff" element={<Staff /> } />
        <Route path="/teacher" element={<Teacher/>} />
        
        
        <Route path="*" />
    </Routes>
       
      
      
    </div>
  );
}
export default RoutesComponent;








