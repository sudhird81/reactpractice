import React from "react";
import Layout from "antd/lib/layout";
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import "antd/dist/antd.css";
import { HomeFilled,UnorderedListOutlined,ContactsFilled} from '@ant-design/icons';


const { Sider } = Layout;

const Sidebar= () => {
    const items = [
        {
            label: <Link to={'/profile'}>HOME</Link>, 
            key: "home",
            icon:<HomeFilled />
               },
        {label:<Link to={"/list"}>List</Link>,
        key:"list",
        icon:<UnorderedListOutlined />

        ,children:[
            {label:<Link to={"/studentlist"}>Student List</Link>,
            key:"student"},
            {label:<Link to={"/teacherlist"}>Teacher List</Link>,
            key:"teacher"},
            {label:<Link to={"/stafflist"}>Staff List</Link>,
            key:"staff"}
            
          ]  },
          {label:"Contact",key:"contact",icon:<ContactsFilled />}
    ]
  
 
  return (
    <>
    <Sider>
    <Menu 
    onClick={(info)=>{
      console.log(info.key)
    }}
     mode="inline"
     items={items}>
  

    
    </Menu>
    </Sider>
    
      
    </>
  ); 
};

export default Sidebar;