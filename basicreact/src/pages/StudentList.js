import {  Table } from 'antd';
import React from 'react';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },

    {
        title: 'Class',
        dataIndex: 'class',
        key: 'class',
    },
];
const data = [
    {
        key: '1',
        name: 'Arun',
        age: 20,
        address: 'Mohali,Punjab',
        email: "arun@gmail.com",
        class: "Btech"
    },
    {
        key: '2',
        name: 'varun',
        age: 22,
        address: 'Chandigarh',
        email: "varun@gmail.com",
        class: "BA"

    },
    {
        key: '3',
        name: 'rajneesh',
        age: 23,
        address: 'UNA',
        email: "rajneesh@gmail.com",
        class: "BCA"
    },
];

const StudentList = () => {
    return (
        <>
            <Table columns={columns} dataSource={data}
            />;
        </>
    )
}

export default StudentList;