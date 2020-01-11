
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actionCreator from '../../../../store/todolist/actionCreator'

class TodoInput extends Component {
    constructor(props) {
        super(props)
        this.handleEnter = this.handleEnter.bind(this)
    }
    handleEnter(e) {
        if (e.keyCode === 13) {
            let title = e.target.value
            //发生给reducer
            this.props.addNewTodo(title)
            e.target.value = ''
        }
    }
    render() {
        return (
            <div className="todoinput">
                <input ref={a => this.b = a} onKeyUp={this.handleEnter} type="text" />
            </div>
        )
    }
    componentDidMount() {
        this.b.focus()
    }
}

// mapDispatchToProps是一个函数, 能接受到dispatch(store.dispatch) 返回什么, 容器组件就会给UI组件传入什么
// 这里可以返回一个对象，这些对象上可以有一些方法，这些方法可以使用dispatch
// let mapDispatchToProps = (dispatch) => {
//     // return {
//     //     // 在这里挂载的函数可以使用dispatch,
//     //     addNewTodo(title) {
//     //         dispatch(actionCreator.addNewTodo(title))
//     //     },
//     //     a() {
//     //         dispatch(actionCreator.a())
//     //     },
//     //     b() {
//     //         dispatch(actionCreator.b())
//     //     }
//     // }
//     // 我们发现在返回对象中的方法都是将在actionCreator的方法创建好的action给dispatch走
//     // 所以利用bindActionCreator函数可以返回一个对象。这个对象上的方法都来自于对应的actionCreator，只是会将actinoCreator的方法返回的action给dispatch走
//     return bindActionCreators(actionCreator, dispatch)
// }

export default connect(state => state, dispatch => bindActionCreators(actionCreator, dispatch))(TodoInput)