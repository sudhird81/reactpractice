import React from 'react'
import { Button, Form, Select } from 'antd'
import { useState } from 'react'
const droping = () => {
    const [section, setSection] = useState("")
    const handleSave = () => {

    }
    return (
        <>
            <Form>
                <Select placeholder="Select a section " onChange=
                    {(e) => {
                        console.log("I am get hit" + e.target?.value)
                        setSection({ value: e.target?.value });
                    }}>

                    <Select.Option value="section A">Section A</Select.Option>
                    <Select.Option value="section B">Section B</Select.Option>
                    <Select.Option value="section C">Section C</Select.Option>

                </Select>
                <Button onClick={handleSave}>SAVE</Button>
            </Form>
        </>
    )
}

export default droping;


