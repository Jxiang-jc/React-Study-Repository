import React, { Component } from 'react'

import {
    BrowserRouter as Router,
    Route, Switch, Redirect
} from 'react-router-dom'

import Admin from '../Admin'
import App from '../App'
import Home from '../pages/Home'
import Board from '../pages/Board'
import Attend from '../pages/Attend'
import WorkOverTime from '../pages/WorkOverTime'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'

export default class extends Component {
    render() {
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path='/' render={() => (
                            <Admin>
                                <Switch>
                                    <Route exact path="/" component={Home} /> 
                                    <Route path="/board" component={Board} />
                                    <Route path="/attend/mine" component={Attend} />
                                    <Route path="/attend/leave-work" component={WorkOverTime} />
                                    <Route path="/not-found" component={NotFound} />
                                    <Redirect from="*" to="/not-found" />
                                </Switch>
                            </Admin>
                        )} />
                    </Switch>
                </App>
            </Router>
        )
    }
}