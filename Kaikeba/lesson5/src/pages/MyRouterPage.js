import React, { Component } from "react";
import { BrowserRouter, Link, Route } from "../my-react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
export default class MyRouterPage extends Component {
    render() {
        return (
            <div>
                <h1>MyRouterPpage</h1>
                <BrowserRouter>
                    <Link to={"/"}>首页</Link>
                    &nbsp;&nbsp;
                    <Link to={"/user"}>用户中心</Link>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/user" component={UserPage} />
                </BrowserRouter>
            </div>
        );
    }
}
