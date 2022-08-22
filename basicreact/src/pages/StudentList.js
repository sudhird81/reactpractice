import { Table, Button, Modal, Input } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import axios from 'axios';
const StudentList = () => {
  const [dataSource, setDataSource] = useState([{ id: 1, name: "prince", email: "prince@gmail.com" }])
  const [isEditing, setIsEditing] = useState(false)
  const [editingStudent, setEditingStudent] = useState(null)
  // const [loading, setLoading] = useState(false)

  useEffect(() => {
    // setLoading(true)
    //     fetch("http://localhost:3001/user").then((result)=>{
    //         result.json().then((resp)=>{
    //             setDataSource(resp.data)
    //             // setLoading(false)
    //         })
    //     })
    // },[])
   
    axios.get('http://localhost:3001/user').then((res) => {
      setDataSource(res.data.data)
    })
  })

  const columns = [
  
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Email",
      dataIndex: "email"
    },
    {

      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button onClick={() => {
              onEditStudent(record)
            }}><EditOutlined /></Button>
            <Button onClick={() => {
              onDeleteStudent(record)
            }}><DeleteOutlined
              /></Button>
          </>
        )
      }
    }
  ]
  const onAddStudent = () => { 
    
    const newStudent = {

      name: "Name",
      email: "Email"

    }
    setDataSource((pre) => {
      return [...pre, newStudent]

    })
  }
  const onDeleteStudent = (record) => {
    Modal.confirm({
      title: "Are you Sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource(pre => {
          return pre.filter((student) => student.name !== record.name);
        });
      }
    })

  };
  const onEditStudent = (record) => {
    setIsEditing(true)
    setEditingStudent({ ...record })
    console.log(record, "bjkbdjk")
  }
  const resetEditing = () => {
    setIsEditing(false)
    setEditingStudent(null)
  }
  return (
    <div className="App">
      <Button style={{float:"right"}} onClick={onAddStudent}>Add a new Student</Button>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}>
        {/* // loading={loading}  */}
      </Table>
      <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing()
          setIsEditing(false)
        }}
        onOk={() => {
          setDataSource(pre => {
            return pre.map(student => {
              if (student.name === editingStudent.name) {
                return editingStudent
              }
              else {
                return student;
              }
            })
          })
          resetEditing()

        }}
      >
       
        <Input value={editingStudent?.name} onChange={(e) => {
          setEditingStudent((pre) => {
            return { ...pre, name: e.target.value }
          })

        }} />
        <Input value={editingStudent?.email}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, email: e.target.value }
            })

          }}
        />
      </Modal>

    </div>
  )

}
export default StudentList;






















































































































































// import {  Table } from 'antd';
// import React from 'react';
// const columns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//         render: (text) => <a>{text}</a>,
//     },
//     {
//         title: 'Age',
//         dataIndex: 'age',
//         key: 'age',
//     },
//     {
//         title: 'Address',
//         dataIndex: 'address',
//         key: 'address',
//     },
//     {
//         title: 'Email',
//         dataIndex: 'email',
//         key: 'email',
//     },

//     {
//         title: 'Class',
//         dataIndex: 'class',
//         key: 'class',
//     },
// ];
// const data = [
//     {
//         key: '1',
//         name: 'Arun',
//         age: 20,
//         address: 'Mohali,Punjab',
//         email: "arun@gmail.com",
//         class: "Btech"
//     },
//     {
//         key: '2',
//         name: 'varun',
//         age: 22,
//         address: 'Chandigarh',
//         email: "varun@gmail.com",
//         class: "BA"

//     },
//     {
//         key: '3',
//         name: 'rajneesh',
//         age: 23,
//         address: 'UNA',
//         email: "rajneesh@gmail.com",
//         class: "BCA"
//     },
// ];

// const StudentList = () => {
//     return (
//         <>
//             <Table columns={columns} dataSource={data}
//             />;


//         </>
//     )
// }

// export default StudentList;