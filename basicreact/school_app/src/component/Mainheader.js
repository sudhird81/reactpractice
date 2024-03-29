import React from "react";
import Layout from "antd/lib/layout";
import {Menu} from 'antd';
import {Link} from 'react-router-dom'


const { Header } = Layout;
const Mainheader = () => {
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
  );
};

export default Mainheader;
