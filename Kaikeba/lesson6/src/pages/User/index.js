import React, { Component } from "react";
import Layout1 from "../Layout/Layout1";
import UserCard from "./components/UserCard";
import { connect } from "react-redux";
import { logout } from "../../action/userAction";
import './index.scss'

@connect(
    state => {
        return {
            data: state.user
        };
    },
    {
        logout
    }
)
class User extends Component {
    render() {
        const { data, logout } = this.props;
        const { userInfo } = data;
        return (
            <Layout1 title="用户中心 - 京东商城" topBarConfig={{ title: "我的京东" }}>
                <div className="user">
                    <UserCard data={userInfo} />
                    <div className="more">很多信息。。。</div>
                    <button className="btn" onClick={logout}>
                        退出登录
                    </button>
                </div>
            </Layout1>
        );
    }
}

export default User;
