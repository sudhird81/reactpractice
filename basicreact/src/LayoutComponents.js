import React from "react";
import { Layout, Menu, Col, Row } from "antd";
import { MailOutlined, AppstoreOutlined, SettingOutlined, LoginOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import RoutesComponent from "./RoutesComponent";
const { Header, Content,Sider,Footer } = Layout;

const LayoutComponents = () => {
  return (
    <>
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

              <Row  justify	="space-around">
                <Menu.Item>
                  <Menu.SubMenu theme="light" key="SubMenu" title="More" icon={<SettingOutlined />}>
                    <Menu.Item icon={<AppstoreOutlined />}>
                      <Link to="/signup">SignUp</Link>
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
