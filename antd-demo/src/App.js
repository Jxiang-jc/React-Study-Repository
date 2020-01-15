import React, { Component } from 'react';
import connect from './modules/connect'
import { withRouter } from 'react-router-dom'

// import SpinLoaidng from './components/SpinLoading'

class App extends Component {

    state = {
        isLoading: false
    }

    UNSAFE_componentWillReceiveProps(props) {
        // 当路由切换时
        let {pathname} = props.location
        if (pathname !== this.props.location.pathname) {
            this.checkLogin(props)
        }
    }

    UNSAFE_componentWillMount() {
        //当直接进入某个路由的时候判断是否登录
        this.checkLogin(this.props)

        // 为bus绑定事件
        this.bus.on('change-loading', () => {
            this.setState({
                isLoading: !this.state.isLoading
            })
        })
    }

    // 登录判断函数
    checkLogin(props) {
        let { commons, history} = this.props
        if (props.location.pathname !== '/login') {
            if (!commons.user_state) {
                // history.replace('/login')
            }
        }
    }

    render() {
        // console.log('this.props', this.props)
        return (
            <div className="App">
                {/* 封装了路由。这里相当于插槽 */}
                {this.props.children}
            </div>
        )
    }
}
// 因为app不是路由。但想要获取路由上的history, location, match信息。所以加引入withRouter
export default withRouter(connect(App, 'commons'));
