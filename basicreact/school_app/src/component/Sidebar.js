import React from "react";
import Layout from "antd/lib/layout";
import { Menu } from 'antd';
import { Link } from "react-router-dom";

const { Sider } = Layout;
const Sidebar = () => {

  const items = [
    {
        label: <Link to={'/profile'}>Profile</Link>, 
        key: "profile1"
    },
    {
        label: <Link to={'/managestaff'}>Managestaff</Link>, 
        key: "Managestaff1"
    },
    {
        label: <Link to={'/studentmanage'}>Student Manage</Link>, 
        key: "studentmanage1"
    },
    
  ];

  return (
    <>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu theme="dark" items={items} />
      </Sider>
    </>
  );
};

export default Sidebar;
