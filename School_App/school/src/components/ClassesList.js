import { Button, Form, Select } from 'antd';
import React from 'react';
import { useState } from 'react';
import axios from "axios";
const { Option } = Select;

const ClassesList = () => {
    const [className, setClassName] = useState("");
    const handleSubmit = () => {
        console.log(process.env.REACT_APP_NAME)
        axios.post(`${process.env.REACT_APP_URL}/stu/profile`, {
            class_name: className,
        }).then(response => console.log("prince", response))
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            style={{
                justifyContent: "center", display: "grid", margin: "100px",
                padding: "50px"
            }}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >   <Form.Item
            label="Class"
            name="class"
            rules={[
                {
                    required: true,
                    message: 'Please input your class',
                },
            ]}
        >

                <Select placeholder="Select a class" onChange={(e) => {
                    setClassName({ value: e.target.value });
                }}>
                    <Option value="class I">Class I</Option>
                    <Option value="class II">Class II</Option>
                    <Option value="class III">Class III</Option>
                    <Option value="class IV">Class IV</Option>
                    <Option value="class V">Class V</Option>
                    <Option value="class VI">Class VI</Option>
                    <Option value="class VII">Class VII</Option>
                    <Option value="class VIII">Class VIII</Option>
                    <Option value="class IX">Class IX</Option>
                    <Option value="class X">Class X</Option>

                </Select>
            </Form.Item>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >

                <Button type="primary" htmlType="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default ClassesList;























