import { Layout } from 'antd';
import React from 'react';
const { Header, Sider, Content } = Layout;

const Teacher = () => (
  <>
   

    <Layout >
      <Sider style={{height:"750px" ,backgroundColor:"White"}}>Sider</Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Teacher Login</Content>
        
      </Layout>
    </Layout>
  </>
);

export default Teacher;