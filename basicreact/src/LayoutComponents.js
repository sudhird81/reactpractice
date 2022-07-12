import React from "react";
import { Layout, Menu, Col, Row } from "antd";
import { Link } from "react-router-dom";
import RoutesComponent from "./RoutesComponent";
const { Header, Content } = Layout;

const LayoutComponents = () => {
  return (
    <>
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
                  <Link to="/signup">SignUp</Link>
                </Menu.Item>
              </Col>
              <Col>
                <Menu.Item>
                  <Link to="/contact">Contact</Link>
                </Menu.Item>
              </Col>
              <Col>
                <Menu.Item>
                  <Link to="/signup1">SignUp1</Link>
                </Menu.Item>
              </Col>
              <Col>
                <Menu.Item>
                  <Link to="/contact1">Contact1</Link>
                </Menu.Item>
              </Col>

            </Row>
          </Menu>
        </Header>


        <Content>
          {" "}
          <RoutesComponent />
        </Content>
      </Layout>
    </>
  );
};

export default LayoutComponents;
