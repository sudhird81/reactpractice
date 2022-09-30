import { Button, Checkbox, Form, Input, Row } from 'antd';
// import Password from 'antd/lib/input/Password';
import React from 'react';
import { useState } from 'react';
// import GoogleLogin from 'react-google-login';
// import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  // const [correctEmail, setCorrectEmail] = useState([""])
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  // const navigate = useNavigate();
  const handleOnChange = (e) => {
    setEmail(e.target.value)
  }

<<<<<<< HEAD
  const login = (e) => {
    // e.preventDefault();
    console.log(email, "email")
    console.log(password, "password")
=======
  const Login = () => {
    console.log(email)

    console.log(password)
>>>>>>> a43fc4d41ffa4940979f827dfb7795fbf89ea272
    console.log(process.env.REACT_APP_NAME)
    // console.log(correctEmail, "gh")
    // if (email === "prince@gmail.com") {
    //   setCorrectEmail(email)
    //   console.log("Correct one")
    //   console.log(setCorrectEmail, "setCorrectEmail")
    //   console.log(correctEmail, "CorrectEmail")
    // }
    // else {

    // }
    // const payload = { role: 2 }
    axios.post(`${process.env.REACT_APP_URL}/login`, {

      // console.log(process.env.REACT_APP_NAME)

      email: email,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setLoginStatus(response.data.message)
      }
      else {
        setLoginStatus(response.data[0].email)
      };
      console.log(response.data)
      localStorage.setItem('access_token1', JSON.stringify(response.data.token))
      // console.log(response.data.token)
      window.location.reload(false);
      //       const role = response.data.user.name
      //  console.log(role,'role');

      //       if(role === "Principal") {
      //         navigate('/dashboard');
      //         // <MainLayout />
      //       }
      //       else if(role === "Teacher") {
      //         navigate('/teacher');
      //       }
      //       else if(role === "Student") {
      //         navigate('/stundent');
      //       }

      //       else if(role === "Staff"){
      //         navigate('/Staff')
      //       }


    });

  };
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };

  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  //  const onLoginSuccess = (response) => {
  //   console.log('Success:', response);
  // };

  // const onLoginFailure = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };
  // const emailllll = (e) => {
  //   console.log(e, "kjfdg")
  // }

  return (
    <Form style={{
      justifyContent: "center", display: "grid", margin: "100px",
      padding: "50px"
    }}
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
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
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
        <Input onChange={handleOnChange} />
        {/* <Input onChange={(e) => {
          setEmail(e.target.value);
          console.log(e.target.value, "Email")
        }} /> */}
        {/* <Input onChange={(e) => {
          setEmail(e.target.value);
          if (e.target.value === /[a-zA-Z0-9_\-.]+[@][a-z]+[\.][a-z]{2,3}/) {
            setCorrectEmail(setEmail)
            console.log(e, "Correct Email")
          }
          else { console.log(setEmail, "Wrong Email") }
          // setEmail(e.target.value);

        }} /> */}
        {/* <Input onChange={emailllll(e)} /> */}
        {/* <Input onChange={(e) => {
          setEmail(e.target.value);
        }} /> */}
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
            console.log(e.target.value, "password")

          }
          }

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


      {/* <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}

      ><Button type="primary" htmlType="submit" onClick={GoogleLogin} >
          Loginn
        </Button>                
        </Form.Item> */}



      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}

      >
        <Button type="primary" htmlType="submit" onClick={login} >
          Login
        </Button>
        <Row>
          <h1>{loginStatus}</h1>
        </Row>
      </Form.Item>
    </Form>
  );
};

export default Login;