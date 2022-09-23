import { Routes, Route } from "react-router-dom";
import StudentListComponent from "../StudentListComponent";
import ClassesList from "../ClassesList";
import TeacherListComponent from "../TeacherListComponent";
import StaffListComponent from "../StaffListComponent";

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Login/>}/>
        <Route path="/dashboard"   element={<MainLayout/>} />         */}
        {/* <Route path="/dashboard"   element={<Dashboard/>} /> */}
        <Route path="/students" element={<StudentListComponent />} />
        <Route path="/staff" element={<StaffListComponent />} />
        <Route path="/teacherlist" element={<TeacherListComponent />} />
        <Route path="/class" element={<ClassesList />} />
        {/* <Route path="*" /> */}
      </Routes>
    </div>
  );
}
export default RoutesComponent;











