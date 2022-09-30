// import React from 'react'
// import Sider from 'antd/lib/layout/Sider'
// import { Link } from 'react-router-dom';
// import { Menu } from 'antd';
// const MainSider = () => {
//   const items = [
//     {
//         label: <Link to={'/student'}>Student</Link>, 
//         key: "profile1"
//     },
//     {
//         label: <Link to={'/teacher'}>Teacher</Link>, 
//         key: "Managestaff1"
//     },
//     {
//         label: <Link to={'/staff'}>Staff</Link>, 
//         key: "studentmanage1"
//     },

//   ];

//   return (
//     <>
//       <Sider
//         breakpoint="lg"
//         collapsedWidth="0"
//         onBreakpoint={(broken) => {
//           console.log(broken);
//         }}
//         onCollapse={(collapsed, type) => {
//           console.log(collapsed, type);
//         }}
//       >
//         <Menu theme="dark" items={items} />
//       </Sider>
//     </>
//   )
// }

// export default MainSider



import React from "react";
import Layout from "antd/lib/layout";
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { HomeFilled, UnorderedListOutlined } from '@ant-design/icons';
const { Sider } = Layout;
const MainSider = () => {
  const items = [
    {
      label: <Link to={'/home'}>HOME</Link>,
      key: "home",
      icon: <HomeFilled />
    },
    {
      label: <Link to={"/list"}>List</Link>,
      key: "list",
      icon: <UnorderedListOutlined />

      , children: [
        {
          label: <Link to={"/students"}>Student List</Link>,
          key: "StudentList"
        },
        {
          label: <Link to={"/teacherlist"}>Teacher List</Link>,
          key: "teacher"
        },
        {
          label: <Link to={"/stafflist"}>Staff List</Link>,
          key: "staff"
        },

        {
          label: <Link to={"/alllist"}>All Users</Link>,
          key: "class"
        }

        // {
        //   label: <Link to={"/class"}>class_Name</Link>,
        //   key: "class"
        // }
      ]
    },

  ]
  return (
    <>
      <Sider style={{ backgroundColor: "White" }}>
        <Menu
          onClick={(info) => {
            console.log(info.key)
          }}
          mode="inline"
          items={items}>

        </Menu>
      </Sider>
      {/* <Outlet /> */}
    </>
  );
};
export default MainSider;








