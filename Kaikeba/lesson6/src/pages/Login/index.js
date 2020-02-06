import React, { Component } from "react";
import "./index.scss";
import Layout1 from "../Layout/Layout1";
import LoginItem from "./LoginItem";
import { connect } from "react-redux";
import {getUserInfo, loginPost } from '../../action/loginAction'

@connect(state => {
    return {
        data: state.user
    };
}, {
    getUserInfo,
    loginPost
})
class Login extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        return (
            <Layout1 title="京东登录" showTabBar={false} topBarConfig={{ title: "京东登录" }}>
                <div className="login">
                    <LoginItem loginPost={this.props.loginPost} />
                </div>
            </Layout1>
        );
    }
}

export default Login;
