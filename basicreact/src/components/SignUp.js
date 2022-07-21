// import Loggin from "../Loggin";
import React from "react";
import { Form, Input, DatePicker,Button, Row, Col, Select } from "antd"
import { useState } from "react";
import { Axios } from "axios";
const SignUp = () => {
   const[fullName,setFullNmae]=useState("");
   const[email,setEmail]=useState("");
   const[password,setPassword]=useState("");
   const[confirmPassword,setConfirmPassword]=useState("");
   const[gender,setGender]=useState("");
   const[dateOfBirth,setDateOfBirth]=useState("");

   const register =()=>{
      Axios.post("http://localhost:3001/register",{
        name:fullName,
        email:email,
        password:password,
        confirmPassword:confirmPassword,
        gender:gender,
        dateOfBirth:dateOfBirth,


      }).then((response) => {
        console.log(response);
      });


   } 



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

            <Form.Item name="fullName" label="Full Name"  rules={[{ required: true, 
            message:"Please enter your name"},
            {whitespace:true},
            {min:3}, 
            ]} hasFeedback>
           
              <Input placeholder="Type your name" onChange={(e)=>{
                setFullNmae(e.target.value);
              }}/>
            </Form.Item>

            <Form.Item name="email" label="Email"rules={[{ required: true, 
            message:"Please enter your email"},
            {type:'email',message:"Please enter a valid email" },
             
            ]} hasFeedback>
              <Input placeholder="Type your email" onChange={(e)=>{
                setEmail(e.target.value);
              }}/>
            </Form.Item>
            
            <Form.Item name="password" label="Password"
            
            rules={[{ required: true, 
            },   
            {min:6},
              
            ]} hasFeedback>
              <Input.Password placeholder="Type your password" onChange={(e)=>{
                setPassword(e.target.value);
              }} />
            </Form.Item>

            <Form.Item name="confirmPassword" label="Confirm Password" dependencies={['password']}
            rules={[{ required: true, 
            },
            ({getFieldValue})=>({
               validator(_,value){
                if(!value || getFieldValue('password') === value) {
                  return Promise.resolve()
                }
                return Promise.reject('The two passwords that you entered does not match.')
               }
            })
             
            ]} hasFeedback>
              <Input.Password placeholder="Confirm  your password" onChange={(e)=>{
                setConfirmPassword(e.target.value);
              }}/>
            </Form.Item>


            <Form.Item name="gender" label="Gender" requiredMark="optional">
              <Select placeholder="Select your gender" onChange={(e)=>{
                setGender(e.target.value);
              }} >
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>


            <Form.Item name="dob" label="Date of Birth" rules={
              [{
                 required:true, 
                 message:'Please provide your date of birth',      
              },
 
              ]
            }hasFeedback>
              <DatePicker style={{ width: "100%" }} picker="date " placeholder="choose date of birth" onChange={(e)=>{
                setDateOfBirth(e.target.value);
              }}/>
            </Form.Item>
            
            {/* <Row>
              <Col span={7} offset={6}></Col>
              
            <Loggin />

            </Row> */}
            

            <Row>
              <Col span={6} offset={6}></Col>
              <Form.Item >
                <Button style={{ width: "500%" }} type="primary" htmlType="submit" onClick={register}>Register</Button>
              </Form.Item>
            </Row>





          </Form>
        </Col>
      </Row>

    </>
  )
}
export default SignUp;
