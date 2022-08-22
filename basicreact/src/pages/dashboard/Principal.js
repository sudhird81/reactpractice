import { Layout,Avatar,Breadcrumb } from 'antd';
// import { useState } from 'react';
import ComponentsList from '../ComponentsFiles/ComponentsList';
import SiderMenu from '../ComponentsFiles/SiderMenu';

// import StudentList from "./pages/StudentList";

const { Header, Sider, Content,Footer } = Layout;


const Principal = () => {
  // const[showData,setShowData]=useState(false)
return (
    <>
      <Layout >
      <Header  style={{ color: "white", padding: 10 }}>Header  <Avatar style={{ float: "right" }} src="school.png" /> </Header>
    
        <Layout>
        <Sider style={{backgroundColor: "White" }}>
        <SiderMenu/>
      </Sider>
      <Layout>
      <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              
              <div style={{ background: "#fff", padding: 24, minHeight: 580 }}><ComponentsList/></div>
              
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