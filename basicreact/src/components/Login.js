import { Button, Checkbox, Form, Input } from 'antd';
// import Password from 'antd/lib/input/Password';
import React from 'react';
import { useState } from 'react';
import {  useNavigate, } from 'react-router-dom';
// import axios from "axios"; 
const Login= () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
   const Submit = () => {
    
    console.log("Email:",email,"Password:",password)
       const response = {
        "message": "Logged In!",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFtaXRAZ21haWwuY29tIiwiaWQiOjIzLCJpYXQiOjE2NTk5MzQ3OTgsImV4cCI6MTY1OTk0MTk5OH0.mNenovqz96egnrFzpWlusHy4G1mJNIPNqJ1j3oBFo5k",
        "user": {
            "id": 23,
            "name": "Amit",
            "role_id": 1,
            "email": "amit@gmail.com",
            "roleName":"Teacher"
        }
    }
    navigate("/Teacher")
     localStorage.setItem("token",JSON.stringify(response.token));
     console.log(response.user.roleName )
    if (response.user.roleName == "Teacher"){
      console.log("hello")
      navigate("/pages/dashboard/Teacher")
           
    }
    else{
     console.log("by")
    }
    
      };
 const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form style={{justifyContent: "center", display: "grid",margin: "100px",
    padding: "50px"}}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
          },
          { type: "email", message: "Please enter a valid email" },
        ]}
      >
        <Input   onChange={(e) => {
                setEmail(e.target.value);
              }} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
          <Input.Password
              placeholder="Type your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={Submit} >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;