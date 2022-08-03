



import React, { useState } from "react";
import { Layout, Menu, Col, Row } from "antd";
import {
  UserAddOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,

} from "@ant-design/icons";
import { Link,useNavigate } from "react-router-dom";
import RoutesComponent from "./RoutesComponent";
import LogInModal from "./components/LogInModal";
import SignModal from "./components/SignModal";
import ContactModal from "./components/ContactModal";

const { Header, Content, Sider } = Layout;

const LayoutComponents = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const token = localStorage.getItem('access_token1');
  console.log(token)
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/login')
  }


  return (

    <>
      <LogInModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
      />
      <SignModal
        visible={isModalVisible1}
        onCancel={() => setIsModalVisible1(false)}
      />
      <>
        <ContactModal
          visible={isModalVisible2}
        onCancel={() => setIsModalVisible2(false)}

        />
      </>
      <Layout >
        <Sider></Sider>
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

                {/* <Col>
                  <Menu.Item>
                    <Link to="/contact">Contact Us</Link>
                  </Menu.Item>
                </Col> */}
                <Row justify="space-around">
                  
                  <Menu.Item  onClick={() => setIsModalVisible2(true)}>
                        <p>Contact Us</p>
                      </Menu.Item>
                      
                      
                      
                      </Row>
                      




                <Row justify="space-around">
                  <Menu.Item>
                    <Menu.SubMenu
                      theme="light"
                      key="SubMenu"
                      icon={<MenuUnfoldOutlined />}
                    >


                      { token ?
                        <Menu.Item
                        icon={<UserAddOutlined />}
                        onClick={logout}
                      >
                        <Link to="#">
                          Logout
                        </Link>
                      </Menu.Item> 
                      :
                      <>
                      <Menu.Item icon={<AppstoreOutlined />} onClick={() => setIsModalVisible1(true)}>
                        <Link to="#">SignUp</Link>
                      </Menu.Item>
                      <Menu.Item
                        icon={<UserAddOutlined />}
                        onClick={() => setIsModalVisible(true)}
                      >
                        <Link to="#">
                          Login
                        </Link>
                      </Menu.Item>
                      </>
                      }
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
          
        </Layout>
      </Layout>
    </>
  );
};

export default LayoutComponents;
