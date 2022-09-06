import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table, Button, Modal, Input } from "antd";
// require('dotenv').config()
// const Dotenv = require('dotenv-webpack');
function StudentListComponent() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([])
  useEffect(() => {
    getData();

  }, []);

  const getData = async () => {
<<<<<<< HEAD
    
    await Axios.get(`http://localhost:3001/users/student`)
    // console.log(process.env.REACT_APP_BASE_URL,"vhhhdwgd")
    .then(
=======
    await Axios.get(`${process.env.REACT_APP_URL}/users/student`).then(
>>>>>>> 67ded9a8d33c66b3af6bac6ce6c4ba8cffcb6a7e
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
  const updateData = async (id) => {

<<<<<<< HEAD
    await Axios.put(`http://localhost:3001/user/${id}`)
=======
    await Axios.get(`${process.env.REACT_APP_URL}/user/${id}`)
>>>>>>> 67ded9a8d33c66b3af6bac6ce6c4ba8cffcb6a7e
      .then((res) => {
        console.log(id, "result")
        setDataSource(
          res.data.map(row => ({
            Name: row.name,
            Email: row.email,
            Id: row.id
          }))
        );
      }
      )
<<<<<<< HEAD
=======
      // .then(data => console.log(data.data))
>>>>>>> 67ded9a8d33c66b3af6bac6ce6c4ba8cffcb6a7e
      .catch(error => console.log(error));
  };
  const deleteData = async (id) => {

    await Axios.delete(`${process.env.REACT_APP_URL}/user/${id}`)
      .then((res) => {
        console.log(id, "resif")
        setDataSource(
          res.data.map(row => ({
            id: row.id
          }))
        );
      }
      );
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Name",
      dataIndex: "Name",
    },
    {
      title: "Email",
      dataIndex: "Email",
    },
    {
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Button onClick={() => {
              // updateData(record.id);
              onEditStudent(record)
            }}> <EditOutlined /></Button>
            <Button onClick={() => {
              onDeleteStudent(record)
            }}><DeleteOutlined
              /></Button>
          </>
        )
      }
    }
  ];
  //Delete Student
  const onDeleteStudent = (record) => {

    Modal.confirm({
      title: "Are you Sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource(pre => {
<<<<<<< HEAD
          deleteData(record.id)
=======
          deleteData(record.id);
>>>>>>> 67ded9a8d33c66b3af6bac6ce6c4ba8cffcb6a7e
          return pre.filter((student) => student.id !== record.id);
        });
      }
    })
  };
  //Add Student
  const onAddStudent = () => {
    const newStudent = {
      id: "id",
      name: "Name",
      email: "Email"
    }
    setDataSource((record) => {
      return [...record, newStudent]
    })
  }
  //Edit Studet
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  return (
    <div>
      <Button style={{ float: "right" }} onClick={onAddStudent}>Add a new Student</Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk=
        {() => {
          setDataSource((pre) => {
<<<<<<< HEAD
            updateData(editingStudent.id)
=======
            updateData(editingStudent.id);
>>>>>>> 67ded9a8d33c66b3af6bac6ce6c4ba8cffcb6a7e
            return pre.map((student) => {
              if (student.id === editingStudent.id) {
                return editingStudent;
              } else {
                return student;
              }
            });
          });
          setIsEditing(false);
          
        }}
      >
        <Input
          value={editingStudent?.Name}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, Name: e.target.value };
            });
          }}
        />

        <Input
          value={editingStudent?.Email}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, Email: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
  );
};
export default StudentListComponent;






