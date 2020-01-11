import React, { Component } from 'react';

import AppHome from './components/pages/Home'
import AppMore from './components/pages/More'

import { Route, NavLink } from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="app">
                <NavLink exact to = {'/'}>首页</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink to={'/more'}>更多</NavLink>
                <hr/>
                <Route exact path="/" component={AppHome}></Route>
                <Route path="/more" component={AppMore}></Route>
            </div>
        )
    }
}
export default App;