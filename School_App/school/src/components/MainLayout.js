import {  Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import Login from "../pages/Login";
import MainHeader from "./LayoutComponent/MainHeader";
import MainSider from "./LayoutComponent/MainSider";
import MainFooter from "./LayoutComponent/MainFooter";
import { Routes, Route } from "react-router-dom";
// import Profile from "./pages/Profile";
// import Changepass from "./pages/Changepass";
// import Managestaff from "./pages/Managestaff";
// import Studentmanage from "./pages/Studentmanage";


function MainLayout() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <MainHeader />
        <Layout style={{ flexDirection: "initial" }}>
          <MainSider />
          <Content style={{ padding: "20px" }}>
          <Routes>            
              <Route path="/student" element={<h1>student</h1>} />
            </Routes>
          </Content>
        </Layout>
       <MainFooter />
      </Layout>
    </>
  );
}
export default MainLayout;

