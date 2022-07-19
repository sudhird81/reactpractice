import Loggin from "../Loggin";
import Logout from "../Logout";
import React from "react";

import { Form, Input,Button, Row, Col} from "antd"


const Login = () => {

  
 const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    <Row>
        <Col span={8} offset={6}>
          <Form name="basic"
         
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 14,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">
             <Form.Item name="email" label="Email"rules={[{ required: true, 
            message:"Please enter your email"},
            {type:'email',message:"Please enter a valid email" },
             
            ]} hasFeedback>
              <Input placeholder="Type your email" />
            </Form.Item>
            
            <Form.Item name="password" label="Password"
            
            rules={[{ required: true, 
            },   
            {min:6},
              
            ]} hasFeedback>
              <Input.Password placeholder="Type your password" />
            </Form.Item>

            <Row>
              <Col span={7} offset={6}></Col>
              
            <Loggin />
            <Logout />

            </Row>
            <Row>
              <Col span={7} offset={6}></Col>
              

         


              <Form.Item >
                <Button style={{ width: "500%" }} type="primary" htmlType="submit">Login</Button>
              </Form.Item>
            </Row>
            
            </Form>
        </Col>
      </Row>
      
    </>
  )
}
export default Login;
