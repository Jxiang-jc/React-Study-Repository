import React, { Component } from "react";
import "./index.scss";

import { Table } from "antd";
import reqwest from "reqwest";

const columns = [
    {
        title: "Name",
        dataIndex: "name",
        sorter: true,
        render: name => `${name.first} ${name.last}`,
        width: "20%"
    },
    {
        title: "Gender",
        dataIndex: "gender",
        filters: [
            {
                text: "Male",
                value: "male"
            },
            {
                text: "Female",
                value: "female"
            }
        ],
        width: "20%"
    },
    {
        title: "Email",
        dataIndex: "email"
    }
];

class Board extends React.Component {
    state = {
        data: [],
        pagination: {},
        loading: false
    };

    componentDidMount() {
        this.fetch();
    }

    handleTableChange = (pagination, filters, sorter) => {
        const pager = { ...this.state.pagination };
        pager.current = pagination.current;
        this.setState({
            pagination: pager
        });
        this.fetch({
            results: pagination.pageSize,
            page: pagination.current,
            sortField: sorter.field,
            sortOrder: sorter.order,
            ...filters
        });
    };

    fetch = (params = {}) => {
        console.log("params", params);
        this.setState({ loading: true });
        reqwest({
            url: "https://randomuser.me/api",
            method: "get",
            data: {
                results: 10,
                ...params
            },
            type: "json"
        }).then(data => {
            const pagination = { ...this.state.pagination };
            pagination.total = 200;
            this.setState({
                loading: false,
                data: data.results,
                pagination
            })
        });
    };

    render() {
        return (
            // 如果 dataSource[i].key 没有提供，你应该使用 rowKey 来指定 dataSource 的主键
            <Table
                columns={columns}
                rowKey={record => record.login.uuid}
                dataSource={this.state.data}
                pagination={this.state.pagination}
                loading={this.state.loading}
                onChange={this.handleTableChange}
            />
        );
    }
}

export default Board;
