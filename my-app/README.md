### 非父子组件通信

- 在vue中可以利用实例来进行非父子通信(event bus), 因为vue的实例上用$on, $emit方法，可以绑定时间和触发事件。

- 其实在react中也可以实现这个功能，可以引入node中的events模块中的EventEmitter，它的原型上有on，emit方法，所以我们可以将EventEmitter的实例作为一个bus来实现非父子组件通信

### redux

redux是一个架构思想，为了实现这个架构思想我们会利用一个叫redux的工具来实现

vuex是状态管理工具，但是redux是一个架构思想

redux架构是应用系统架构, 和 MVC, MVVM是属于一种的

![redux](http://www.ruanyifeng.com/blogimg/asset/2016/bg2016091802.jpg)

redux的结构： store、reducer、view、actionCreator

redux的使用：

> 1. 创建store
``` js
    import { createStore } from 'redux'
    const store = createStore(reducer) // 注意，创建store的时候需要传入一个reducer
```

> 2. 创建reducer
```js
// reducer 是一个纯函数，能接受到当前的状态，以及action，返回一个新状态就代表这个store中的state改变了
// 纯函数就是指保证同样的输入就有同样的输出
// reducer返回的状态都是store的state, 给reducer的previousState参数设置默认值其实就相当于给store设置了默认状态
// 注意，在reducer里千万不要直接操作原状态，而是创建新状态，操作之后返回新状态

import state from './state'
const reducer = (previousState = state, action) => {
    let new_state = { ...previousState }
    return new_state
}
export default reducer
```

> 3. 使用store中的状态
```js
// store调用getState的方法可以得到其中管理的state
```

> 4. 当需要更改状态的时候, 创建actionCreator来生成action, action是一个动作， 其实就是一个对象，上面有一些标识性信息，将action给dispatch到reducer的时候，reducer对action做出判断后操作状态，在发生用户动作后调用actionCreator的方法胜成action，将其利用store的dispatch方法发送到reducer里面

> 5. 当action被发送到reducer中的时候，reducer就会执行，能接受到此次dispatch的action，对action进行判断之后，返回一个新状态，这个时候store的状态就会被更改

> 6. 如果组件想要得知状态变化的话，需要使用store。subscribe来订阅状态的变化，传入回调回调函数，这个函数就会在状态变化的时候执行


### reducer 划分

- 在vuex中可以分模块去管理状态，这样的话就能更好的协同合作，互不干扰。
- 在redux中想要分离模块操作的话，其实主要是划分reducer就ok了
- 其实我们就可以使用combineReducers来划分reducer

### react-redux工具

- 我们发现在react项目中直接使用纯redux架构的话，会有一些使用上的不方便
- 比如，组件获取数据的时候不方便，当数据更新的时候还得去订阅一个检测更新的函数
- 我们就会使用一个react-redux工具来提高redux操作的简易程度

#### 核心思想
react-redux觉得组件应该分为两种 UI组件（木偶组件）、容器组件（智能组件）

也就是说，比如，我们有一个组件需要使用store中的数据, 其实我们的业务逻辑会分为两个部分

 * 获取数据以及检测数据的更新
 * 渲染使用数据

react-redux就认位，我们应该用两个组件来实现原本一个组件的功能，父组件为容器组件，专门用来获取数据、检测数据更新，然后将数据传低给子组件也就是UI组件，UI组件专门用来渲染使用数据

react-redux会帮我们创建容器组件，这样的话，我们只需要创建UI组件就可以了

#### 核心API

> 1. Provider组件

在使用react-redux的时候我们先要在组件的最外层包裹一个Provide组件，并为其传入store属性

```js
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)
```

> 2. conncet 函数
```js
// 这个函数就可以根据一个UI组件来胜成一个容器组件，并且容器组件的子组件就是我们的UI组件
// connnect函数的返回值是一个高阶组件，这个高阶组件传入UI组件就能返回一个容器组件
// 并且容器组件会从context树上接收到Provider挂载的store
// connect函数能返回一个高阶组件
let HOC = connect()
// 这个高阶组件，在这里就可以接受一个UI组件，然后返回一个容器组件
let TodoContainer = HOC(TodoContent)
export default TodoContainer

// 容器组件会给UI组件传入一些store的相关属性，例如dispatch

// connect函数可以接受两个参数 mapStateToProps, mapDispatchToProps

// 参数的不同导致高阶组件都不相同，根据UI组件所生成的容器组件就不同，容器组件给里面的UI组件传入的东西就不同

// 其实，这两个参数的作用是控制容器组件给UI组件传入想要的属性

// mapStateToProps是一个函数，能接受到state(store中的state)，返回什么，容器组件就会给UI组件传入什么数据
let mapStateToProps = (state) => {
    // 可以在函数中对数据做出一些处理后返回给UI组件
    return { todos: state.todolist.todos }
}

// mapDispatchToProps是一个函数，能接受到dispatch(store中的dispatch)，返回什么，容器组件就会给UI组件传入什么
// 在这里可以返回要给对象，这些对象上可以有一些方法，这些方法可以使用dispatch
let mapDispatchToProps = (dispatch) => {
    return (
        addNewTodo (title) {
            // 在这里挂载的函数可以使用到dispatch
            dispatch(actionCreator.addNewTodo(title))
        }
    )
}

// 我们发现在返回的对象中方法都是在将actionCreator的方法创建好的action给dispatch走
// 利用bindActionCreator函数可以返回一个对象，这个对象上的方法都来自对应的actionCreator，只是会将actionCreator的方法返回返回的action给dispatch走
import {bindActionCreator} from 'redux'
let mapDispatchToProps = (dispatch) => {
    return bindActionCreator(actionCreator, dispatch)
}
```

#### redux-thunk
actionCreator的任务就是根据需求创建action再返回出去, 但是有一个问题存在

如果我们想要先去经过个异步操作，再去返回action怎么办，异步逻辑不能卸载视图层的组件中，依然需要卸载actionCreator中，但实如果有异步操作的话，我们就无法返回action，这个时候我们就需要使用一些redux的中间件工具，redux-thunk、redux-promise、redux-saga

```js
// 配置方法
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
const store = createStore(reducer, applyMiddleware(thunk));

// 配置好之后，actionCreator方法的返回值可以是一个函数, 这个函数会接受dispatch，我们就不要直接return action，而是创建好action后，直接dispatch

const actionCreator = {
    // 同步方法直接返回action
    // addNewTodo (title) {
    //     let action = { type: ADD_NEW_TODO, title }
    //     return action             
    // }
    // 异步
    addNewTodo(title) {
        可以直接返回一个接受dispatch的函数，这样的话我们就可以将异步创建的action直接dispatch
        return (dispatch) => {
            backend.saveTitle(title).then(res => {
                let action = { type: ADD_NEW_TODO, title}
                dispatch(action)
            })
        }
    }
}

```

