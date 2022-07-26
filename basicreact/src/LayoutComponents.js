import React from "react";
import { Layout, Menu, Col, Row, Button } from "antd";
import { AppstoreOutlined, SettingOutlined, LoginOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import RoutesComponent from "./RoutesComponent";
import { useState } from "react";
import SignModal from "./components/SignModal";
const { Header, Content, Sider, Footer } = Layout;



const LayoutComponents = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClick = e => {
    console.log('click ', e);
  };
  return (

    <>
<SignModal   modal2Visible={isModalVisible} onCancel={()=>setIsModalVisible(false)}/>
      <Layout>
        <Sider>Sider</Sider>
        <Layout>
          <Header style={{ padding: "0" }}>
            {" "}
            <Menu mode="horizontal" defaultSelectedKeys={["/"]} breakpoint="lg">
              <Row gutter={16}>
                <Col>
                  <Menu.Item>
                    <Link to="/">Home</Link>
                  </Menu.Item>

                </Col>
                <Col>
                  <Menu.Item>
                    <Link to="/about">About</Link>
                  </Menu.Item>
                </Col>

                <Col>
                  <Menu.Item>
                    <Link to="/contact">Contact</Link>

                  </Menu.Item>
                </Col>

                <Row justify="space-around">
                  <Menu.Item>
                    <Menu.SubMenu theme="light" key="SubMenu" title="More" icon={<SettingOutlined />} onClick={onClick} >
                      <Menu.Item icon={<AppstoreOutlined />}>
                        

                          <Link to="/signmodel"><Button type="primary"  onClick={() => setIsModalVisible(true)}>
                Sign Up
            </Button></Link>
                      

                      </Menu.Item>
                      <Menu.Item icon={<AppstoreOutlined />}>
                        <Link to="/login" icon={<LoginOutlined />}>Login</Link>
                      </Menu.Item>
                    </Menu.SubMenu>
                  </Menu.Item>
                 
                </Row>

              </Row>
            </Menu>
          </Header>


          <Content>
            {" "}
            <RoutesComponent />
          </Content>
          <Footer>THANKU!</Footer>
        </Layout>
         
        




      </Layout>

    </>
  );
};

export default LayoutComponents;
