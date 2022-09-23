import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "antd";

function TeacherListComponent() {

    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        getData();
    }, []);
    const getData = async () => {
        const payload = { "role": "1" }
        console.log(payload, "payload")
        await axios.get(`${process.env.REACT_APP_URL}/users/`, {
            params: payload,
            // paramsSerializer: params => {
            //     return qs.stringify(params)
            // }
        }).then(
            res => {
                console.log(res.config?.params, "API")
                console.log(res, "response")
                setDataSource(
                    res?.data.map(row => ({
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
export default TeacherListComponent;