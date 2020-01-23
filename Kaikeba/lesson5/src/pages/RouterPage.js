import React, { Component } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import HomePage from "./HomePage";
import UserPage from "./UserPage";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "./LoginPage";

export default class RouterPage extends Component {
    render() {
        const id = 111;

        return (
            <div>
                <h3>RouterPage</h3>
                <BrowserRouter>
                    <Link to="/">首页</Link>
                    &nbsp;&nbsp;
                    <Link to="/user">用户中心</Link>
                    &nbsp;&nbsp;
                    <Link to={"/search/" + id}>搜索</Link>
                    &nbsp;&nbsp;
                    <Link to="/aaa">不知道的页面</Link>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        {/* <Route path="/user" component={UserPage} /> */}
                        <PrivateRoute path="/user" component={UserPage} />
                        <Route path="/search/:id" component={Search} />
                        <Route path="/login" component={LoginPage} />
                        <Route component={() => <div>404</div>} />
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

function Search(props) {
    console.log("props", props);
    const { id } = props.match.params;
    return (
        <div>
            Search: {id}
            <br />
            <Link to="/search/detail">{id}</Link>
            <Route path="/search/detail" component={Detail} />
        </div>
    );
}

function Detail(props) {
    return <div>Detail 666</div>;
}
