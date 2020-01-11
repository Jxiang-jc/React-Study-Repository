import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import AppHome from './components/pages/Home'
import AppConcat from './components/pages/Concat'
import AppMine from './components/pages/Mine'
import AppDetail from './components/pages/Concat/Detail'
import AppLogin from './components/pages/Login'
import AppNotFound from './components/pages/NotFound'

class App extends Component {
	componentWillReceiveProps(props) {
		//全局判断登录状态, 如果确实是路由变化了
		if (props.location.pathname !== this.props.location.pathname) {
			this.checkLogin(props)
		}
	}
	componentWillMount() { //当刚刚进入到项目的时候，判断当前是不是需要判断登录的页面
		this.checkLogin(this.props)
	}
	checkLogin(props) {
		let target = props.location.pathname

		let { checkLogin } = this.props
		let isCheck = checkLogin.some(item => {
			return target.startsWith(item)
		})
        console.log("TCL: App -> checkLogin -> isCheck", this.store.getState())

		if (isCheck && !this.store.getState().user_info) {
			setTimeout(() => {
				this.props.history.push('/login')
			}, 0)
		}
	}

	render() {
		let { routes } = this.props
		return (
			<div className="App">
				<Switch>
					{routes.map(({ id, path, component, render, exact }) => {
						return <Route key={id} exact={exact} path={path} component={component} render={render} />
					})}
					<Redirect from="*" to="/not-found" />
				</Switch>
			</div>
		)
	}
}

App.defaultProps = {
	routes: [
		{ id: 1, path: '/', component: AppHome, exact: true },
		{ id: 2, path: '/concat', component: AppConcat },
		{ id: 3, path: '/mine/a', render: () => (<div>mine-a</div>) },
		{ id: 4, path: '/mine', component: AppMine },
		{ id: 5, path: '/detail/:id', component: AppDetail },
		{ id: 6, path: '/login', component: AppLogin },
		{ id: 7, path: '/not-found', component: AppNotFound }
	],
	checkLogin: ['/mine', '/concat']
}

export default withRouter(App);
