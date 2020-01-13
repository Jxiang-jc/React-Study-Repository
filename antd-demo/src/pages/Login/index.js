
import React, { Component } from 'react'
import connect from '../../modules/connect'
import './index.scss'
class Login extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        console.log(this.props)
    }
    handleSubmit(e) {
        e.preventDefault()
        let username = this.username.value
        let password = this.password.value
        
        this.props.commons_actions.login({
            username, password,
            success: () => {
                this.props.history.replace('/')
            }
        })
    }
    render() {
        return (
            <div className="app-login">
                <div className="login-form">
                    <div className="avtar">
                        <img src="/images/login/avtar.png" alt="" />
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" required ref={el => this.username = el} className="text" />
                        <div className="key">
                            <input type="password" required ref={el => this.password = el} />
                        </div>
                        <div className="signin">
                            <input type="submit" value="login" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(Login, 'commons')