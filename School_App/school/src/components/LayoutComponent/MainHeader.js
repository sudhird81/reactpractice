import { Header } from 'antd/lib/layout/layout';
import { Layout, Menu, Col, Row,Image } from "antd";
import {
  UserAddOutlined,
  AppstoreOutlined,
  MenuUnfoldOutlined,

} from "@ant-design/icons";
import { Link,useNavigate } from "react-router-dom";

const MainHeader = () => {
  const token = localStorage.getItem('access_token1');
  
  console.log(token)
  const navigate = useNavigate();
  const logout =()=>{
    localStorage.clear();
    navigate('/')
    window.location.reload(false);
  }  
  return (
    <>
       <Header style={{display:'flex', justifyContent:'space-between', color: "white", fontSize: "20px" }}>
       <Image
    width={60}
    src="school.png"
  />
        
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
