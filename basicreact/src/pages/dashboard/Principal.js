import { Layout,Breadcrumb } from 'antd';
// import { useState } from 'react';
import ComponentsList from '../ComponentsFiles/ComponentsList';
import Mainheader from './Mainheader';
import { Routes, Route } from "react-router-dom";
import Sidebar from './Sidebar';
import Picture from './Picture';

// import StudentList from "./pages/StudentList";

const { Header, Sider, Content,Footer } = Layout;


const Principal = () => {
  // const[showData,setShowData]=useState(false)
return (
    <>
      {/* <Layout >
      <Header  style={{ color: "white", padding: 10 }}>Header  <Avatar style={{ float: "right" }} src="school.png" /> </Header> */}
      <Layout style={{ minHeight: "100vh" }}>
        <Mainheader />
        <Layout>
        <Sider style={{backgroundColor: "White" }}>
        <Sidebar />
      </Sider>
      <Layout>
      <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
      
              <div style={{ background: "#fff", padding: 24, minHeight: 580 }}>

              <Routes>
             

              <Route path="/changepassword" element={<Picture/>} />
              <Route path="/studentlist" element={<ComponentsList />} />

            </Routes>


              </div>
              
            </Content>
            <Footer
              style={{
                textAlign: 'center',
              }}
            >
              Ant Design layout example  Created by Prince 
            </Footer>

        </Layout>
      </Layout>
      </Layout>
    </>
  );
};

export default Principal;




