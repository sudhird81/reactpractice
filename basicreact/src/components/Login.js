import { Button, Checkbox, Form, Input } from 'antd';
// import Password from 'antd/lib/input/Password';
import React from 'react';
import { useState } from 'react';
import axios from "axios";



const Login= () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
   const Submit = () => {
    axios.post(process.env.port,{
    
      email: email,
      password: password,    

    }).then((response) => {
        console.log(response);
        localStorage.setItem(email,password);
        
      });
   } 

  

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