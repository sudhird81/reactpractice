import React from 'react'
import { Header } from 'antd/lib/layout/layout'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
const MainHeader = () => {
  const items = [
    {
      label: <Link to={"/changepassword"}>Change Password</Link>,
      key: "changepass1",
    },
   
  ];
  return (
    <>
      <Header style={{display:'flex', justifyContent:'space-between', color: "white", fontSize: "20px" }}>
        Dashboard
        
        <Menu theme="dark" mode="horizontal" items={items} />
      </Header>
    </>
  )
}

export default MainHeader
