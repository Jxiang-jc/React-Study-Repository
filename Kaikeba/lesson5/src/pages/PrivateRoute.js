import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

class PrivateRoute extends Component {
    render() {
        const { path, component, isLogin } = this.props;
        if (isLogin) {
            return <Route path={path} component={component} />;
        }
        return (
            <Redirect
                to={{
                    pathname: "/login",
                    // 保存登陆后需要重新重定向的路径
                    state: {
                        redirect: path
                    }
                }}
            />
        );
    }
}

export default connect(state => ({isLogin: state.user.isLogin}))(PrivateRoute);
