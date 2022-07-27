import React from "react";
// import { GoogleLogin } from 'react-google-login';
import { Form, Input, Button, Row,  } from "antd";
import { useState } from "react";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");

   const login = () => {
      axios.post("http://localhost:3001/login",{
      
        email: email,
        password: password,    

      }).then((response) => {
        if (response.data.message){
          setLoginStatus(response.data.message)
        }
        else{
          setLoginStatus(response.data[0].email)
        };
            
      });
   } ;
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //  const onLoginSuccess = (response) => {
  //   console.log('Success:', response);
  // };

  // const onLoginFailure = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <>
      <Row justify="center">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                message: "Please enter your email",
              },
              { type: "email", message: "Please enter a valid email" },
            ]}
            hasFeedback
          >
            <Input
              placeholder="Type your email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ min: 6 }]}
            hasFeedback
          >
            <Input.Password
              placeholder="Type your password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Item>

          {/* <GoogleLogin 
            style={{width:"100% !important", justifyContent:"center"}}
                    clientId="26243695013-vqdma1ktsnsqrcvreh6p7s9imtjtakki.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}/> */}

          <Row justify="center">
            <Form.Item>
              <Button type="primary" htmlType="submit" onClick={login} block>
                Login
              </Button>
            </Form.Item>
          </Row>
          <Row>
            <h1>{loginStatus}</h1>
          </Row>
        </Form>
      </Row>
    </>
  );
};
export default Login;

// import React from "react";
// import { GoogleLogin } from 'react-google-login';
// import { Form, Input,Button, Row, Col} from "antd"

// const Login = () => {

//  const onLoginSuccess = (response) => {
//     console.log('Success:', response);
//   };

//   const onLoginFailure = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };
//   return (
//     <>
//     <Row>
//     <Col span="8"></Col>
//     <Col span="8">  <Form>
//              <Form.Item name="email" label="Email">
//               <Input placeholder="Type your email" />
//             </Form.Item>
//             <Form.Item name="password" label="Password">
//               <Input placeholder="Type your password" />
//             </Form.Item>
//             <GoogleLogin
//             style={{width:"100% !important", justifyContent:"center"}}
//                     clientId="26243695013-vqdma1ktsnsqrcvreh6p7s9imtjtakki.apps.googleusercontent.com"
//                     buttonText="Login with Google"
//                     onSuccess={onLoginSuccess}
//                     onFailure={onLoginFailure}
//                     cookiePolicy={'single_host_origin'}
//                     isSignedIn={true}
//                 />
//               <Form.Item >
//                 <Button style={{ width: "100%" }} type="primary" htmlType="submit">Login</Button>
//               </Form.Item>
//             </Form></Col>
//     <Col span="8"></Col>

//      </Row>

//     </>
//   )
// }
// export default Login;
