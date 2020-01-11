import { ADD_NEW_TODO } from './const'

const actionCreator = {
    // addNewTodo(title) { // 同步方法直接返回
    //     return {
    //         type: ADD_NEW_TODO,
    //         title
    //     }
    // }
    addNewTodo(title) { // 异步方法
        // 可以直接返回一个接受dispatch的函数，这样的话我们就可以将异步创建的action直接dispatch
        return (dispatch) => {
            backend.saveTitle(title).then(res => {
                let action = {
                    type: ADD_NEW_TODO,
                    title: title
                }
                dispatch(action)
            })
        }
    }
}

const backend = {
    saveTitle() {
        return new Promise((resolve, rejected) => {
            setTimeout(() => {
                resolve()
            }, 1000);
        })
    }
}

export default actionCreator