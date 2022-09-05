import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table, Button, Modal, Input } from "antd";

function StudentListComponent() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([])
  useEffect(() => {
    getData();

  }, []);

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
  const updateData = async (id) => {

    await Axios.get(`http://localhost:3001/user/ ${id}`)
      // .then((res) => {
      //   console.log(id, "result")
      //   setDataSource(
      //     res.data.map(row => ({
      //       Name: row.name,
      //       Email: row.email,
      //       Id: row.id
      //     }))
      //   );
      // }
      // );
      .then(data => console.log(data.data))
  .catch(error => console.log(error));
  };
  const deleteData = async (id) => {

    await Axios.delete(`http://localhost:3001/user/ ${id}`)
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
              updateData(record.id);
              onEditStudent(record)
            }}> <EditOutlined /></Button>
            <Button onClick={() => {
              deleteData(record.id); onDeleteStudent(record)
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
      <Button style={{float:"right"}} onClick={onAddStudent}>Add a new Student</Button>
      <Table columns={columns} dataSource={dataSource}></Table>
      <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
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