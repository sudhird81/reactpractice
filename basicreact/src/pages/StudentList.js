
import {Table,Button} from "antd";
import { useEffect,useState } from "react";
import {EditOutlined,DeleteOutlined} from "@ant-design/icons"; 
import axios from 'axios'; 
const StudentList =()=>{
  const [dataSource,setDataSource]=useState([{id:1,name:"prince"}])
//   const [loading,setLoading]=useState(false)

useEffect(()=>{
    // setLoading(true)
//     fetch("http://localhost:3001/user").then((result)=>{
//         result.json().then((resp)=>{
//             setDataSource(resp.data)
//             // setLoading(false)
//         })
//     })
// },[])
  axios.get('http://localhost:3001/user').then((res)=>{
    setDataSource(res.data.data)
  })
})

  const columns=[
  {
    
    title:"Name",
    dataIndex:"name"
  },
  {
    
    title:"Email",
    dataIndex:"email"
  },
  {
   
    title:"Actions",
    render:(record)=>{
      return(
      <>
      <EditOutlined />
      <DeleteOutlined 
      style={{color:"red",marginLeft:12}} />
      </>
      )
    }
  }
] 
  const onAddStudent=()=>{
    const randomNumber=parseInt(Math.random()*1000);
    const newStudent={
         id:randomNumber,
         name:"Name"+randomNumber,
         email:randomNumber+"@gmail.com",
         address:"Address"+randomNumber
    }
    setDataSource((pre)=>{                               
      return[...pre,newStudent]
    })
  }
  return(    
    <div className="App">
    <Button onClick={onAddStudent}>Add a new Student</Button>
      <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{pageSize:5}}>
       {/* loading={loading} >  */}
      </Table>
      
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