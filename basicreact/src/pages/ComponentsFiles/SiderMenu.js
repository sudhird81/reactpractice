import "antd/dist/antd.css";
import { HomeFilled,UnorderedListOutlined,ContactsFilled} from '@ant-design/icons';
import { Menu } from 'antd';
import { Link } from "react-router-dom";

const SiderMenu= () => {
 
  return (
    <>
    <Menu 
    onClick={(info)=>{
      console.log(info.key)
    }}
     mode="inline"
    items={[
      {label:"Home",key:"home",icon:<HomeFilled />},
      {label:"List",key:"home",icon:<UnorderedListOutlined />,children:[
        {label:"Student List",key:"student"},
        {label:"Teacher List",key:"teacher"},
        {label:"Staff List",key:"staff"}
      ]  },
      {label:"Contact",key:"contact",icon:<ContactsFilled />}
    ]}>

    
    </Menu>
      
    </>
  ); 
};

export default SiderMenu;