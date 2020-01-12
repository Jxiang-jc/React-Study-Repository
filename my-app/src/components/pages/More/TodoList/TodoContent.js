import React, { Component } from 'react'
// import { connect } from 'react-redux'
import connect from '../../../../modules/connect'

const TodoItem = ({ data }) => {
    return (
        <li>{data.title}</li>
    )
}

class TodoContent extends Component {
    render() {
        let { todos } = this.props.todolist
        return (
            <div className="todocontent">
                <ul>
                    {todos.map(todo => (<TodoItem data={todo} key={todo.id} />))}
                </ul>
            </div>
        )
    }
}

// mapStateToProps 是一个函数, 能接受到state(store中的state) 返回什么,容器组件就会给UI组件传入什么数据
let mapStateToProps = (state) => {
    console.log("TCL: mapStateToProps -> state", state)
    // 可以在函数中对数据做出一个写处理后返回给ui组件
    return {todos: state.todolist.todos}
}

// export default connect(mapStateToProps)(TodoContent)

export default connect(TodoContent, 'todolist')