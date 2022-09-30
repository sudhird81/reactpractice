import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button, Modal, Input, Select } from "antd";
import { Form } from 'antd';
// import { useParams } from "react-router-dom";
const { Option } = Select;
// import ShowProfile from "./ShowProfile";
// require('dotenv').config()
// const Dotenv = require('dotenv-webpack');
function StudentListComponent() {
  const [dataSource, setDataSource] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const [saveData, setSaveData] = useState(false);
  // const [addData, setAddData] = useState(null);
  const [className, setClass_name] = useState();
  const [section, setSection] = useState();
  const [updateStudent, setUpdateStudent] = useState(null)

  useEffect(() => {
    getData();
    // showdata();
  }, []);


  const getData = async () => {
    const payload = { "role": 2 }
    // console.log("here i am ", payload)
    await axios.get(`${process.env.REACT_APP_URL}/users/`, {
      params: payload
    }).then(
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



  const saveProfile = (user_id) => {
    console.log(user_id, className, section, "Here")
    console.log(className)
    console.log(typeof (className))
    // console.log(payload)
    axios.post(`${process.env.REACT_APP_URL}/profile/${user_id}`, {

      "class_name": className,
      "section": section
    }
    ).then((res) => {
      // console.log(res.config?.params, "API")
      console.log(res, "response")
    })
    setSaveData(false);
    user_id.preventDefault();
  }





  const updateData = async (id) => {
    console.log("hdghja")
    console.log(id)

    const name = editingStudent.Name
    const email = editingStudent.Email
    await axios.put(`${process.env.REACT_APP_URL}/user/${id}`, { name, email })
      .then(
        res => {
          // res.json()
          console.log(id, "result")
          console.log(res, "hello")
          console.log(editingStudent, "bye")
          console.log(editingStudent.Name, "bye")
          console.log(name)
          console.log(email)

          // setDataSource(
          //   res?.data.map(row => ({
          //     Name: row.name,
          //     Email: row.email,
          //     Id: row.id
          //   }))
          // );
          // console.log(row)
          // console.log(row.name)
        }
      )
    setIsEditing(false);
  };


  const deleteData = async (id)=> {
    await axios.delete(`${process.env.REACT_APP_URL}/user/${id}`)
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
            <Button onClick={() => { onSaveData(record) }}><EyeOutlined /></Button>
            <Button onClick={() => { onEditStudent(record) }}><EditOutlined /></Button>
            <Button onClick={() => { onDeleteStudent(record) }}><DeleteOutlined /></Button>
          </>
        )
      }
    }
  ];


  const Class = (value) => {
    setClass_name(value);
    console.log(value)

  }
  const Section = (value) => {
    setSection(value);
    console.log(value)

  }
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
  const onSaveData = (record) => {
    setSaveData(true);
    setUpdateStudent(record);
  };
  const resetEditing1 = () => {
    setSaveData(false);
    setUpdateStudent(null);
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
        // onOk={() => { updateData(editingStudent.id) }}
        // onOk={updatedata}
        onOk=
        {() => {
          setDataSource((pre) => {
            console.log(pre, "hgfkfj")
            console.log(editingStudent, "hfghjsgdghg")
            updateData(editingStudent.id);
            return pre.map((student) => {
              console.log(student, "gdh")
              if (student.id === editingStudent.id) {
                return editingStudent;

              } else {
                return student;
              }
            });
          }
          );
          setIsEditing(false);

        }
        }

      >
        <Input
          value={editingStudent?.Name}
          onChange={(e) => {
            console.log("I am get hit" + e.target.value)
            setEditingStudent((pre) => {
              return { ...pre, Name: e.target.value };
            });
          }}
        />

        <Input
          value={editingStudent?.Email}
          onChange={(e) => {
            setEditingStudent((pre) => {
              console.log("I am get hit" + e.target.value)
              return { ...pre, Email: e.target.value };
            });
          }}
        />


      </Modal>
      <Modal
        title="Student"
        visible={saveData}
        onCancel={() => {
          resetEditing1();
        }}
        // onOk={() => { setSaveData(false) }}
        onOk={() => { saveProfile(updateStudent.id) }}

        // onOk={saveProfile(96)}
        // onOk={() => {
        //   (resetEditing1) => {
        //     saveProfile(updateStudent.id)
        //   }
        //   resetEditing1();
        // }}

        okText="Save"  >
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          style={{ margin: 20 }}
          autoComplete="off" >

          <Form.Item label="Class">
            <Select
              // labelInValue
              defaultValue={{
                value: 'Select Class Name',
                // label: 'Select Class Name',
              }}
              style={{ width: 180, }}
              onChange={Class}>
              <Option value='Class I'>class I</Option>
              <Option value='Class II'>class II</Option>
              <Option value='Class III'>class III</Option>
              <Option value='Class IV'>class IV</Option>
              <Option value='Class v'>class V</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Section">
            <Select
              // labelInValue
              defaultValue={{
                value: 'Select Section',
                // label: 'Select Class Name',
              }}
              style={{ width: 180, }}
              onChange={Section}>
              <Option value='Section A'>section A</Option>
              <Option value='Section B'>section B</Option>
              <Option value='Section C'>section C</Option>
            </Select>
          </Form.Item>



        </Form>
      </Modal>

    </div>

  );

};
export default StudentListComponent;