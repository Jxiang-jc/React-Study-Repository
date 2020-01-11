import React, { Component } from 'react'


const TodoItem = ({ data }) => {
    return (
        <li>{data.title}</li>
    )
}

class TodoContent extends Component {
    constructor(props) {
        super(props)
        // 将全局状态挂载到组件的状态上
        this.state = {
            todos: this.$store.getState().todolist.todos
        }
        this.$store.subscribe(() => {
            this.setState({ todos: this.$store.getState().todolist.todos })
        })
    }

    render() {
        let { todos } = this.state
        return (
            <div className="todocontent">
                <ul>
                    {
                        todos.map(item => (<TodoItem data={item} key={item.id}></TodoItem>))
                    }
                </ul>
            </div>
        )
    }
}

export default TodoContent