
import React, { Component } from 'react'

import TodoInput from './TodoInput'
import TodoContent from './TodoContent'

class TodoList extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <div className = "app-home-todolist">
                <TodoInput/>
                <TodoContent/>
            </div>
        )
    }
}

export default TodoList