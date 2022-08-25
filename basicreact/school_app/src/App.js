import logo from './logo.svg';
import './App.css';
import Mainfooter from './component/Mainfooter';
import Mainheader from './component/Mainheader';
import Sidebar from './component/Sidebar';
import Staff from './Pages/Staff';
import Student from './Pages/Student';
import Profile from './Pages/Profile';
import Changepass from './Pages/Changepass';
import { Layout } from 'antd';
import {Content,Footer,Header} from "antd/lib/layout/layout";
import { Routes,Route } from 'react-router-dom';

function App(){
  return(
    <>
      <Layout style={{minHeight:"100vh"}}>
        <Mainheader />
      
        <Layout style={{flexDirection: "initial" }}>
          <Sidebar />
           <Content>
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/changepassword" element={<Changepass />} />
                <Route path="/managestaff" element={<Staff />} />
                <Route path="/studentmanage" element={<Student />} />
              </Routes>
            </Content>
        </Layout>  
      
        <Mainfooter />
      </Layout>

    </>
  )
}



export default App;
