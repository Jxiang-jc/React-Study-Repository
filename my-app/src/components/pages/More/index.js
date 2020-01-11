
import React, { Component } from 'react'
import './index.scss'
import TodoList from './TodoList'
class More extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className = "app-more">
                <TodoList/>
            </div>
        )
    }

}

export default More