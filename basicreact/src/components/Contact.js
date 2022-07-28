import { Layout } from 'antd';
import React from 'react';
const {  Sider, Content } = Layout;

const Contact = () => (
  <>   

    <Layout>
      <Sider><img src='https://i.pinimg.com/236x/b4/1e/79/b41e79d9b24d9ea9f95310ac612314ef--lush-green-go-green.jpg' alt='image'></img></Sider>
      <Layout>
        
        <Content style={{paddingLeft:"100px"}}><b></b><h1>Contact Us</h1><b></b></Content>
        
      </Layout>
    </Layout>
  </>
);

export default Contact;