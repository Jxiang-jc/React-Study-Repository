import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

@connect(state => {
    return {
        data: state.user
    };
}, {})
class PrivateRoute extends Component {
    render() {
        const { props } = this;
        const { component: Component, data, ...rest } = props;
        const { isLogin } = data;
        return (
            <Route
                {...rest}
                render={props =>
                    isLogin ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: {
                                    redirect: props.location.pathname
                                }
                            }}
                        />
                    )
                }
            ></Route>
        );
    }
}

export default PrivateRoute;
