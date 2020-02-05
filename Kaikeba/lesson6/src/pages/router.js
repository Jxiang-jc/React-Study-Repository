import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import _404 from "./404/";
import ProductList from "./Product";
import Search from "./Search";

function Router(props) {
    return (
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/productList" component={ProductList}></Route>
            <Route path="/search" component={Search}></Route>
            <Route component={_404}></Route>
        </Switch>
    );
}

export default Router;
