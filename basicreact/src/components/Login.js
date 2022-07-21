// import Loggin from "../Loggin";

import React from "react";
import { GoogleLogin } from 'react-google-login';
import { Form, Input,Button, Row, Col} from "antd"


const Login = () => {

  
 const onLoginSuccess = (values) => {
    console.log('Success:', values);
  };

  const onLoginFailure = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
    <Row>
    <Col span="8"></Col>
    <Col span="8">  <Form>
             <Form.Item name="email" label="Email">
              <Input placeholder="Type your email" />
            </Form.Item>
            <Form.Item name="password" label="Password">
              <Input placeholder="Type your password" />
            </Form.Item>
            <GoogleLogin 
            style={{width:"100% !important", justifyContent:"center"}}
                    clientId="26243695013-07ri265e0ldhbkadci6k6uibhkoibv3o.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> 
              <Form.Item >
                <Button style={{ width: "100%" }} type="primary" htmlType="submit">Login</Button>
              </Form.Item>
            </Form></Col>
    <Col span="8"></Col>
        
     </Row>
      
    </>
  )
}
export default Login;
