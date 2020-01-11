
import React, { Component } from 'react'
import './index.scss'
import TodoList from './TodoList'
class Home extends Component {
    
    render () {
        return (
            <div className = "app-home">
                Hello ,this is Home!
                <TodoList/>
            </div>
        )
    }

}

export default Home