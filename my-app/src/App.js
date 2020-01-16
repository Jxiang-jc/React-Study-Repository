import React, { Component } from "react";

import AppHome from "./components/pages/Home";
import AppMore from "./components/pages/More";
import AppCommentHoc from "./components/pages/common-app-hoc";
import ReduxDemo from "./components/pages/redux-demo1";

import { Route, NavLink } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="app">
                <NavLink exact to={"/"}>
                    首页
                </NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to={"/more"}>更多</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to={"/commentHoc"}>评论appHOC</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to={"/reduxdemo"}>React-redux（一）</NavLink>
                <hr />
                <Route exact path="/" component={AppHome}></Route>
                <Route path="/more" component={AppMore}></Route>
                <Route path="/commentHoc" component={AppCommentHoc}></Route>
                <Route path="/reduxdemo" component={ReduxDemo}></Route>
            </div>
        );
    }
}
export default App;
