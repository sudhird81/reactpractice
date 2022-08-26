import React from 'react'
import Sider from 'antd/lib/layout/Sider'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const MainSider = () => {
  const items = [
    {
        label: <Link to={'/student'}>Student</Link>, 
        key: "profile1"
    },
    {
        label: <Link to={'/teacher'}>Teacher</Link>, 
        key: "Managestaff1"
    },
    {
        label: <Link to={'/staff'}>Staff</Link>, 
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
  )
}

export default MainSider
