import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
    render() {
        const { isLogin, login, location } = this.props;
        const { redirect = "/" } = location.state || {};

        if (isLogin) {
            return <Redirect to={redirect} />;
        }
        return (
            <div>
                <div>LoginPage</div>
                <button onClick={login}>login</button>
            </div>
        );
    }
}

export default connect(state => ({ isLogin: state.user.isLogin }), {
    login: () => ({ type: "loginSuccess" })
})(LoginPage);
