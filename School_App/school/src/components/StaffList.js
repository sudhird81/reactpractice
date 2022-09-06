// import React from 'react'

// const StaffList = () => {
//   return (
//     <div>
//       Staff List here 
//     </div>
//   )
// }

// export default StaffList

import { Table, Button, Modal, Input } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Axios from 'axios';

const StaffList = () => {
  const [dataSource, setDataSource] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingStudent, setEditingStudent] = useState(null)
  //  console.log(dataSource,"datasource")
  useEffect(()=>{
    getData()
  
  },[])
  const getData = async () => {
    await Axios.get('http://localhost:3001/users/student').then(
      res => {
        setDataSource(
          res.data.map(row => ({
            Name: row.name,
            Email: row.email,
            id: row.id
          }))
        );
      }
    );
  };


  const columns = [
  
    {
      title: "Name",
      data: "name",
     

    },
    {
      title: "Email",
      data: "email",         
      
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
        dataSource={dataSource}>
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
export default StaffList;