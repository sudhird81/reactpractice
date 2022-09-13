import { Routes, Route } from "react-router-dom";
import StudentListComponent from "../StudentListComponent";
import StaffList from "../StaffList";
import ClassesList from "../ClassesList";
import TeacherListComponent from "../TeacherListComponent";

const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        {/* <Route path="/" element={<Login/>}/>
        <Route path="/dashboard"   element={<MainLayout/>} />         */}
        {/* <Route path="/dashboard"   element={<Dashboard/>} /> */}
        <Route path="/students" element={<StudentListComponent />} />
        <Route path="/staff" element={<StaffList />} />
        <Route path="/teacherlist" element={<TeacherListComponent />} />
        <Route path="/class" element={<ClassesList />} />
        {/* <Route path="*" /> */}
      </Routes>
    </div>
  );
}
export default RoutesComponent;











