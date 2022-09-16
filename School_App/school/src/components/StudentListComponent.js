import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Modal, Input } from "antd";
import { Form, Select } from 'antd';
const { Option } = Select;
// import ShowProfile from "./ShowProfile";

// require('dotenv').config()
// const Dotenv = require('dotenv-webpack');
function StudentListComponent() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([])
  const [saveData, setSaveData] = useState(false)
  const [addData, setAddData] = useState(null)

  useEffect(() => {
    getData();
    // showdata();
  }, []);

  // const showData = () => {
  //   // <ShowProfile />
  //   // window.alert("hello")
  //   console.log("yhuregfyuregyfug")
  //   // <ClassesList />
  // }


  const Showdata = () => {
    axios.post("/", {
      name: setAddData.name

    }.then((response) => {
      console.log(response)
    }))
  }

  const getData = async () => {
    // const payload = { role: "student",id:"id" }
    // console.log("here i am ", payload)
    await axios.get('http://localhost:3001/users/').then(
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
    await axios.get('http://localhost:3001/user/${id}')
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
      // .then(data => console.log(data.data))
      .catch(error => console.log(error));
  };


  const deleteData = async (id) => {
    await axios.delete('http://localhost:3001/user/${id}')
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
              // onEditStudent(record)
              onSaveData()
            }}><EyeOutlined /></Button>
            <Button onClick={() => {
              // updateData(record.id);
              onEditStudent(record)
            }}>
              <EditOutlined /></Button>
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
          deleteData(record.id)
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
  //Edit Student
  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };
  const onSaveData = () => {
    setSaveData(true);
    setAddData()
    // setEditingStudent({ ...record });
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
            updateData(editingStudent.id);
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
      <Modal
        title="Student"
        visible={saveData}
        onCancel={() => { setSaveData(false) }}
        onOk={() => { setSaveData(false) }}
        onok={Showdata}
        okText="Save"

      >
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          autoComplete="off"
        >


          <Form.Item
            label="Class"
            name="class" >
            <Select placeholder="Select a class" onChange={(e) => {
              setAddData({ value: e.target.value });
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
            label="Section"
            name="section">
            <Select placeholder="Select a section" onChange={(e) => {
              setAddData({ value: e.target.value });
            }}>
              <Option value="section a">Section A</Option>
              <Option value="section b">Section B</Option>
              <Option value="section c">lSection C </Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Teacher"
            name="teacher">
            <Select placeholder="Select a teacher" onChange={(e) => {
              setAddData({ value: e.target.value });
            }}>
              <Option value="section a">Teacher A</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>

    </div>

  );

};
export default StudentListComponent;