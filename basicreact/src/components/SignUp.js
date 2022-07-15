import React from "react";
import { Form, Input, DatePicker, Checkbox, Button, Row, Col, Select } from "antd"
const SignUp = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>


      <Row>
        <Col span={12} offset={6}>
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

            <Form.Item name="fullName" label="Full Name" rules={[{ required: true, 
            message:"Please enter your name"},
            {whitespace:true},
            {min:3}, 
            ]} hasFeedback>
           
              <Input placeholder="Type your name" />
            </Form.Item>

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
              <Input.Password placeholder="Confirm  your password" />
            </Form.Item>


            <Form.Item name="gender" label="Gender" requiredMark="optional">
              <Select placeholder="Select your gender" >
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
              <DatePicker style={{ width: "100%" }} picker="date " placeholder="choose date of birth" />
            </Form.Item>
            {/* <Row>
            <col span={10} offset={8}></col>
           </Row>
            <Form.Item name="agreement">
                <Checkbox>Agree to ourTerm and Condition</Checkbox>
            </Form.Item>
            <Row></Row> */}

            <Row>
              <Col span={8} offset={5}></Col>
              <Form.Item >
                <Button style={{ width: "500%" }} type="primary" htmlType="submit">Register</Button>
              </Form.Item>
            </Row>





          </Form>
        </Col>
      </Row>

    </>
  )
}
export default SignUp;
