import { Routes, Route} from "react-router-dom";
import Login from "../../pages/Login";
import StudentListComponent from "../StudentListComponent";
import StaffList from "../StaffList";
import MainLayout from "../MainLayout";

const RoutesComponent = () => {
  return (
    <div>     
      <Routes>
        {/* <Route path="/" element={<Login/>}/>
        <Route path="/dashboard"   element={<MainLayout/>} />         */}
        {/* <Route path="/dashboard"   element={<Dashboard/>} /> */}
        <Route path="/students" element={<StudentListComponent />} />   
        <Route path="/staff" element={<StaffList/>} />        
        {/* <Route path="*" /> */}
      </Routes>      
    </div>
  );
}
export default RoutesComponent;











