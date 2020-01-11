import React, { Component } from 'react'
import actionCreator from '../../../../store/todolist/actionCreator'

class TodoInput extends Component {
    constructor(props) {
        super(props)
        this.hendlerEnter = this.hendlerEnter.bind(this)
    }
    hendlerEnter(e) {
        if (e.keyCode === 13) {
            let title = e.target.value
            // 发送给reducer
            this.$store.dispatch(actionCreator.addNewTodo(title))

            e.target.value = ''
        }
    }

    componentDidMount () {
        this.el.focus()
    }

    render() {
        return (
            <div className="todoinput">
                <input ref={el => this.el = el} onKeyUp={this.handlerEnter} type="text" />
            </div>
        )
    }
}

export default TodoInput