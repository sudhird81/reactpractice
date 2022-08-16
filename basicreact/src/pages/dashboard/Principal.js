import { Layout } from 'antd';
import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import { CKEditor} from '@ckeditor/ckeditor5-react'; 
import StudentList from '../StudentList';

const { Header, Sider, Content } = Layout;


const Principal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <>
   <CKEditor



   /> 
      <Layout >
        <Sider style={{ height: "750px", backgroundColor: "White" }}> <Button type="" onClick={showModal}>
        StudentList
      </Button><Modal title="Student List" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <StudentList/>
      </Modal></Sider>
        <Layout>
          <Header style={{ color: "white" }}>Header</Header>
          <Content><button>Principal Login</button></Content>

        </Layout>
      </Layout>
    </>
  );
};

export default Principal;