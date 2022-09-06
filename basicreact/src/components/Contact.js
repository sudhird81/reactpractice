<<<<<<< HEAD
import { Form, Layout, Input, Button } from 'antd';
import React from 'react';
const { Sider, Content } = Layout;

const Contact = () => {


=======
import { Form,Layout,Input,Button, message} from 'antd';
import React from 'react';
import { useState } from "react";
import axios from "axios";
const {  Sider, Content } = Layout;

const Contact = ()=>{
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

  const contact = () => {
    axios.post("http://localhost:3001/Contact",{

      name: name,    
      email: email,
      message: message,
      

    }).then((response) => {
      if (response.data.message){
        setLoginStatus(response.data.message)
      }
      else{
        setLoginStatus(response.data[0].email)
      };
  
    });
    
 } ;

>>>>>>> a39d2344d485de3a04549c385297aaeb1120805f


  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
<<<<<<< HEAD


      <Layout style={{ width: "100%", backgroundColor: "white" }}>
        <Sider ><img src='https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHw%3D&w=1000&q=80' alt='Greenery' style={{ height: "100%", width: "100%" }} />
        </Sider>

        <Content>
          <Form name="basic"
            labelCol={{ span: 8, }}
            wrapperCol={{ span: 14, }}
=======
<Layout style={{ width: "100%",backgroundColor:"white" }}>
  <Sider ><img src='https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHw%3D&w=1000&q=80' alt='Greenery' style={{height:"100%",width:"100%"}}/>
  </Sider>
   
          <Content>
            <Form name="basic" 
            labelCol={{span:8,}}
            wrapperCol={{span:14,}}
>>>>>>> a39d2344d485de3a04549c385297aaeb1120805f
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">

            <Form.Item name="Name" label="Name" rules={[
              { whitespace: true },
              { min: 3 },
            ]} >
<<<<<<< HEAD

              <Input placeholder="Type your name" />
            </Form.Item>

            <Form.Item name="Email" label="Email" rules={[
              { type: 'email', message: "Please enter a valid email" },

=======
           
              <Input placeholder="Type your name"  onChange={(e) => {
                setName(e.target.value);
              }}/>
            </Form.Item>

            <Form.Item name="email" label="Email"rules={[
            {type:'email',message:"Please enter a valid email" },
             
>>>>>>> a39d2344d485de3a04549c385297aaeb1120805f
            ]}>
              <Input placeholder="Type your email"  onChange={(e) => {
                setemail(e.target.value);
              }} />
            </Form.Item>

            <Form.Item name="Message" label="Message" rules={[
              { type: 'message' },

            ]}>
<<<<<<< HEAD
              <textarea rows={2} cols={20} style={{ resize: "none" }} placeholder="Type your Message" />
            </Form.Item>




            <Form.Item style={{ marginLeft: "100px" }}>
              <Button type="primary" htmlType="submit" >Submit</Button>
            </Form.Item>

          </Form>
        </Content>



      </Layout>

    </>
=======
              <textarea cols={20} placeholder="Type your Message"  onChange={(e) => {
                setmessage(e.target.value);
              }} />
            </Form.Item>
            <Form.Item style={{marginLeft:"100px"}}>
                <Button type="primary" htmlType="submit" onClick={contact}>Submit</Button>
              </Form.Item>
              </Form>
            </Content>
           
            
            
            </Layout>
  
>>>>>>> a39d2344d485de3a04549c385297aaeb1120805f

  )
}

export default Contact;



