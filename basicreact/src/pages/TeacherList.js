import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table ,Button,Modal} from "antd";

function TeacherList() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await Axios.get('http://localhost:3001/users/teacher').then(
      res => {
        setstate(
          res.data.map(row => ({
            Name: row.name,
            Email: row.email,
            Id: row.id,
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
                 <Button> <EditOutlined /></Button>
                 <Button onClick={() => {
              onDeleteStudent(record)
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
        
              name: "Name",
              email: "Email"
        
            }
            setstate((record) => {
              return [...record, newStudent]
        
            })
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
      
    </div>
  );
}

export default TeacherList;