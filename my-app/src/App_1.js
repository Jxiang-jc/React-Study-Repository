// 探索React中 this 的指向
import React from 'react';

const STR = '被调用，this指向：';

class App extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        console.log(`ComponentDidMount ${STR}`, this)
    }

    UNSAFE_componentWillReceiveProps() {
        console.log(`UNSAFE_componentWillReceiveProps ${STR}`, this)
    }

    shouldComponentUpdate() {
        console.log(`shouldComponentUpdate ${STR}`, this)
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate ${STR}`, this);
    }

    componentWillUpdate() {
        console.log(`componentWillUpdate ${STR}`, this);
    }

    //测试函数
    handler() {
        console.log(`handler ${STR}`, this);
    }

    render() {
        console.log(`render ${STR}`, this);
        this.handler();
        window.handler = this.handler;
        window.handler();
        return (
            <div>
                <h1>hello World</h1>
                <label htmlFor='btn'>单击打印函数handler中this的指向</label>
                <input id="btn" type="button" value='单击' onClick={this.handler} />
            </div>
        )
    }
}
export default App

// 首先 在js中。this不是在函数声明的时候定义的。而是在函数调用（即运行）的时候定义的

// React内部使用了自己的合成事件，如果是使用React.createClass创建的组件。内部函数this会绑定该组件，所以this为该组件。但是对于使用class创建的组件不会自动绑定，所以需要手动绑定，onClick={this.handler}这里只是为click事件指定回调函数，因为在render函数中这里this执行组件，这里就相当于onclick={App.handler}的形式，只有在单击事件触发handler才回执行，但这时已经没法明确是谁调用的handler了（所以此时它内部的this具有不确定性，所以为undefined，如果这时内部使用this.state就会报错），所以当我们需要在handler运行时保持明确的this指向，就需要在将其在明确的环境里进行手动绑定，需要明确的是我们对组件内函数进行this绑定是为了在函数内调用组件实例中的属性或方法（如获取this.state等等）。如果函数内部完全不需要获取组件实例，其实没有必要进行绑定