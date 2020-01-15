import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Breadcrumb } from "antd";

const breadcrumbNameMap = {
    "/": "后台首页",
    "/board": "公告信息",
    "/attend/mine": "我的考勤",
    "/attend/leave-work": "请假加班"
};

const BreadCrumb = withRouter(props => {
    const { location } = props;
    const pathSnippets = location.pathname.split("/").filter(i => i);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        return (
            <Breadcrumb.Item key={url}>
                <Link to={url}>{breadcrumbNameMap[url]}</Link>
            </Breadcrumb.Item>
        );
    });
    const breadcrumbItems = [
        <Breadcrumb.Item key="home">
            <Link to="/">Home</Link>
        </Breadcrumb.Item>
    ].concat(extraBreadcrumbItems);
    return (
        <div className="demo" style={{ margin: "16px 0" }}>
            <Breadcrumb>{breadcrumbItems}</Breadcrumb>
        </div>
    );
});

export default BreadCrumb;
