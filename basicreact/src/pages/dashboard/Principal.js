import { Layout,Button } from 'antd';
// import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import StudentList from '../StudentList';
// import StudentList from "./pages/StudentList";

const { Header, Sider, Content } = Layout;


const Principal = () => {
  // const[showData,setShowData]=useState(false)
  const navigate = useNavigate();
  
 const showList = ()=>{

  alert("hello")
  navigate('/dashboard/student');
 }


  return (
    <>
      <Layout >
        <Sider style={{ height: "750px", backgroundColor: "White" }}> <Button type="" onClick={showList}>
        StudentList
      </Button>
      {/* <StudentList/> */}
      </Sider>
        <Layout>
        
          <Header style={{ color: "white" }}>Header</Header>
          <Content>

          <StudentList/>
          </Content>

        </Layout>
      </Layout>
    </>
  );
};

export default Principal;