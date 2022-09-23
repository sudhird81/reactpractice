import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";

function AllListComponent() {

    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        // const payload = { "role": "3" }
        // console.log(payload, "payload")
        await axios.get('http://localhost:3001/userslist/', {
            // params: payload,
            // paramsSerializer: params => {
            //     return qs.stringify(params)
            // }
        }).then(
            res => {
                console.log(res.config?.params, "API")
                console.log(res, "response")
                setDataSource(
                    res.data.map(row => ({
                        id: row.id,
                        Name: row.name,
                        Email: row.email,
                        Role_Id: row.role_id,
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
            title: "Role_Id",
            dataIndex: "Role_Id",
        }

    ];


    return (
        <div>
            <Table
                columns={columns}
                dataSource={dataSource}>

            </Table>

        </div>
    );
};
export default AllListComponent;