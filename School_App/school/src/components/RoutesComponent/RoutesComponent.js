import { Routes, Route } from "react-router-dom";
import StudentListComponent from "../StudentListComponent";
// import StaffList from "../StaffList";
// import AllListComonent from "../AllListComponent";
import TeacherListComponent from "../TeacherListComponent";
import StaffListComponent from "../StaffListComponent";
import AllListComponent from "../AllListComponent";
import HomeComponent from "../HomeComponent";

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Login/>}/>
        <Route path="/dashboard"   element={<MainLayout/>} />         */}
        {/* <Route path="/dashboard"   element={<Dashboard/>} /> */}
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/students" element={<StudentListComponent />} />
        <Route path="/teacherlist" element={<TeacherListComponent />} />
        <Route path="/stafflist" element={<StaffListComponent />} />
        <Route path="/alllist" element={<AllListComponent />} />
        {/* <Route path="*" /> */}
      </Routes>
    </div>
  );
}
export default RoutesComponent;











