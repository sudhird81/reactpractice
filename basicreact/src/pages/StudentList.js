// import { Table, Button, Modal, Input } from "antd";
// import { useEffect, useState } from "react";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import Axios from 'axios';

// const StudentList = () => {
//   const [dataSource, setDataSource] = useState([])
//   const [isEditing, setIsEditing] = useState(false)
//   const [editingStudent, setEditingStudent] = useState(null)
//   // const [loading, setLoading] = useState(true)
//    console.log(dataSource,"datasource")
//   useEffect(()=>{
//     getData()
//   //  async function callApi(){
//   //   const apiResult = axios.get('http://localhost:3001/users/student')
//   //   setDataSource(apiResult.data)
//   //  }
//   //   callApi()
//   //   console.log(dataSource)
//   },[])
//   const getData=async()=>{
//     await Axios.get('http://localhost:3001/users/student').then(
//       res =>{
//         // setLoading(false);
//         setDataSource(setDataSource&&
//           res.data.map(row=>({
//             Name:row.name,
//             Email:row.email
//           })
//           )
//         )
//       }
//     )
//   }


//   const columns = [
  
//     {
//       title: "Name",
//       data: "name",
//       // render : (_,dataSource) => {
//       //   console.log(dataSource,"")
//       //   return <p>{dataSource.name}</p> 
//       // },

//     },
//     {
//       title: "Email",
//       data: "email",         
//       // render : (_,dataSource) => {
//       //   return <p>{dataSource.email}</p> 
//       // },
//     },
//     {

//       title: "Actions",
//       render: (record) => {
//         return (
//           <>
//             <Button onClick={() => {
//               onEditStudent(record)
//             }}><EditOutlined /></Button>
//             <Button onClick={() => {
//               onDeleteStudent(record)
//             }}><DeleteOutlined
//               /></Button>
//           </>
//         )
//       }
//     }
//   ]
//   const onAddStudent = () => { 
    
//     const newStudent = {

//       name: "Name",
//       email: "Email"

//     }
//     setDataSource((pre) => {
//       return [...pre, newStudent]

//     })
//   }
//   const onDeleteStudent = (record) => {
//     Modal.confirm({
//       title: "Are you Sure, you want to delete this student record?",
//       okText: "Yes",
//       okType: "danger",
//       onOk: () => {
//         setDataSource(pre => {
//           return pre.filter((student) => student.name !== record.name);
//         });
//       }
//     })

//   };
//   const onEditStudent = (record) => {
//     setIsEditing(true)
//     setEditingStudent({ ...record })
//     console.log(record, "bjkbdjk")
//   }
//   const resetEditing = () => {
//     setIsEditing(false)
//     setEditingStudent(null)
//   }
//   return (
//     <div className="App">
//       <Button style={{float:"right"}} onClick={onAddStudent}>Add a new Student</Button>


//       <Table
//         columns={columns}
//         dataSource={dataSource}
//         pagination={{ pageSize: 5 }}>
//         {/* // loading={loading}  */}
//       </Table>
//       <Modal
//         title="Edit Student"
//         visible={isEditing}
//         okText="Save"
//         onCancel={() => {
//           resetEditing()
//           setIsEditing(false)
//         }}
//         onOk={() => {
//           setDataSource(pre => {
//             return pre.map(student => {
//               if (student.name === editingStudent.name) {
//                 return editingStudent
//               }
//               else {
//                 return student;
//               }
//             })
//           })
//           resetEditing()

//         }}
//       >
       
//         <Input value={editingStudent?.name} onChange={(e) => {
//           setEditingStudent((pre) => {
//             return { ...pre, name: e.target.value }
//           })

//         }} />
//         <Input value={editingStudent?.email}
//           onChange={(e) => {
//             setEditingStudent((pre) => {
//               return { ...pre, email: e.target.value }
//             })

//           }}
//         />
//       </Modal>

//     </div>
//   )

// }
// export default StudentList;



















import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Table ,Button,Modal} from "antd";

function StudentList() {
  const [state, setstate] = useState([]);
  useEffect(() => {
    getData();
  }, []);

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