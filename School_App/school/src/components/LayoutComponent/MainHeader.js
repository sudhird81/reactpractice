// import React from 'react';
import { Header } from 'antd/lib/layout/layout';
// import { Link } from 'react-router-dom';
// import { Menu } from 'antd';
import React, { useState } from "react";
import { Layout, Menu, Col, Row } from "antd";
import {
  UserAddOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,

} from "@ant-design/icons";
import { Link,useNavigate } from "react-router-dom";
// const { Header, Content, Sider, Footer } = Layout;


const MainHeader = () => {


  const token = localStorage.getItem('access_token1');
  console.log(token)
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/')
  }
  
  return (
    <>
       <Header style={{display:'flex', justifyContent:'space-between', color: "white", fontSize: "20px" }}>
        Dashboard
        
        {/* <Menu theme="dark" mode="horizontal" items={items} /> */}
            {" "}
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/"]} breakpoint="lg">
              
                
             
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
              
            </Menu>
          </Header>
    </>
  )
}
export default MainHeader
