import {  Layout } from "antd";
import { Content } from "antd/lib/layout/layout";
import MainHeader from "./LayoutComponent/MainHeader";
import MainSider from "./LayoutComponent/MainSider";
import MainFooter from "./LayoutComponent/MainFooter";
import RoutesComponent from "./RoutesComponent/RoutesComponent";
import Login from "../pages/Login"

function MainLayout() {
  
  const token = localStorage.getItem('access_token1');
  return (
    <>
    {token?
    
      <Layout style={{ minHeight: "100vh" }}>
        <MainHeader />
        <Layout style={{ flexDirection: "initial" }}>
          <MainSider />
          <Content style={{ padding: "20px" }}>
            <RoutesComponent/>
          </Content>
        </Layout>
       <MainFooter />
      </Layout>
      : <Login />}
    </>
  );
}
export default MainLayout;




