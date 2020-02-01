import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";

function Router(props) {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
        </Switch>
    );
}

export default Router