import React, { Component } from "react";
import "./index.scss";
import Layout1 from "../Layout/Layout1";
import LoginItem from "./LoginItem";
import { connect } from "react-redux";
import {getUserInfo, loginPost } from '../../action/loginAction'
import {Redirect} from 'react-router-dom'

@connect(state => {
    return {
        data: state.user
    };
}, {
    getUserInfo,
    loginPost
})
class Login extends Component {
    componentDidMount() {
        this.props.getUserInfo();
    }

    render() {
        const {location, data, loginPost} = this.props
        const {isLogin} = data || {}
        const redirect = (location && location.state && location.state.redirect) || '/'

        if (isLogin) {
            return <Redirect to={redirect} />
        }
        return (
            <Layout1 title="京东登录" showTabBar={false} topBarConfig={{ title: "京东登录" }}>
                <div className="login">
                    <LoginItem loginPost={loginPost} />
                </div>
            </Layout1>
        );
    }
}

export default Login;
