import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table ,Button,Modal,Input} from "antd";

function StudentList() {
  const[editState,setEditState]=useState(false)
  const [editingStudent, setEditingStudent] = useState(null);
  const [state, setstate] = useState([]);
  useEffect(() => {
    getData();
    
  },[]);

  const getData = async () => {
    await Axios.get('http://localhost:3001/users/student').then(
      res => {
        setstate(
          res.data.map(row => ({
            Name: row.name,
            Email: row.email,
            id: row.id
          }))
        );
      }
    );
  };

  const deleteData =  async (id) => {
    
    await Axios.delete(`http://localhost:3001/user/ ${id}` )
    .then((res) => {
        console.log(id,"resif")
        setstate(
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
                 <Button onClick={()=>{
                  onEditStudent(record)
                 }}> <EditOutlined /></Button>
                 <Button onClick={() => {
              deleteData(record.id);onDeleteStudent(record)
            }}><DeleteOutlined
              /></Button>
                </>
              )
            }
    }
  ];
  const onDeleteStudent = (record) => {
        Modal.confirm({
          title: "Are you Sure, you want to delete this student record?",
          okText: "Yes",
          okType: "danger",
          onOk: () => {
            setstate(pre => {
              return pre.filter((student) => student.id !== record.id);
            });
          }
        })    
      };
      const onAddStudent = () => {     
            const newStudent = {
              id:"id",
              name: "Name",
              email: "Email"        
            }
            setstate((record) => {
              return [...record, newStudent]        
            })
          }
    const onEditStudent=(record)=>{
          setEditState(true)
          setEditingStudent({ ...record });
    } 

  return (
    <div>
        <Button style={{float:"right"}} onClick={{onAddStudent}}>Add a Student</Button>
        <Table
          columns={columns}
          dataSource={state}
          pagination={10}
          scroll={{ y: 240 }}
        />
        <Modal
        title="Edit Student"
        visible={editState}
        okText="Save"
        onOk={()=>{
          setEditState(false)
        }}
        onCancel={()=>{
          setEditState(false)
        }}
      
      >
      <Input></Input>
      <Input></Input>
        

        </Modal>
      
    </div>
  );
}

export default StudentList;