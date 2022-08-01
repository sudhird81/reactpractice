import { Form,Layout,Input,Button} from 'antd';
import React from 'react';
const {  Sider, Content } = Layout;

const Contact = ()=>{

  


  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return(
    <>
      

<Layout>
  <Sider ><img src='https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29udGFjdHxlbnwwfHwwfHw%3D&w=1000&q=80' alt='Greenery' style={{height:"100%",width:"100%"}}/>
  </Sider>
    <Layout>
    <Content>
          <Form name="basic" style={{ width: "100%" }}
          labelCol={{span:8,}}
          wrapperCol={{span:14,}}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off">

            <Form.Item name="Name" label="Name"  rules={[
            {whitespace:true},
            {min:3}, 
            ]} >
           
              <Input placeholder="Type your name" />
            </Form.Item>

            <Form.Item name="Email" label="Email"rules={[
            {type:'email',message:"Please enter a valid email" },
             
            ]}>
              <Input placeholder="Type your email" />
            </Form.Item>

            <Form.Item name="Message" label="Message"rules={[
            {type:'message' },
             
            ]}>
              <textarea cols={20} placeholder="Type your Message" />
            </Form.Item>




            <Form.Item style={{marginLeft:"100px"}}>
                <Button type="primary" htmlType="submit" >Submit</Button>
              </Form.Item>
            
            </Form>
            </Content>
           
            </Layout>
            
    
  </Layout>

</>
  
  )
}

export default Contact;



