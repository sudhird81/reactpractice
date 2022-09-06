import React, { useState } from "react";
import { Layout, Menu, Col, Row } from "antd";
import {
  UserAddOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,

} from "@ant-design/icons";
import { Link,useNavigate } from "react-router-dom";
const { Header, Content, Sider, Footer } = Layout;

const Teacher = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible1, setIsModalVisible1] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);

  const token = localStorage.getItem('access_token1');
  console.log(token)
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/')
  }


  return (

    <>
      {/* <LogInModal
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
      </> */}
      <Layout>
        <Sider></Sider>
        <Layout>
          <Header style={{ padding: "0" }}>
            {" "}
            <Menu mode="horizontal" defaultSelectedKeys={["/"]} breakpoint="lg">
              <Row gutter={16}>
                <Col>
                  <Menu.Item>
                    <Link to="#">Home</Link>
                  </Menu.Item>
                </Col>
                <Col>
                  <Menu.Item>
                    <Link to="#">About</Link>
                  </Menu.Item>
                </Col>

                <Col>
                  <Menu.Item>
                    <Link to="#">Contact Us</Link>
                  </Menu.Item>
                </Col>
             
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
                        <Menu.Item
                        icon={<UserAddOutlined />}
                        onClick={() => setIsModalVisible(true)}
                      >
                        <Link to="/">
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
            {/* <RoutesComponent /> */}
          </Content>
          <Footer>THANKU!</Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default Teacher;
