
import React, { Component } from 'react'
import './index.scss'

class Button extends Component {
    render() {
        return (
            <div className="Button">
                <button onClick={this.props.handleClick}>button</button>
            </div>
        )
    }
}

class DoubleButton extends Component {
    render() {
        return (
            <div>
                <button onDoubleClick={this.props.handleClick}>doubleButton</button>
            </div>
        )
    }
}

const HOC = (PComponent) => {
    return class extends Component {
        handleClick(test) {
            alert(2, test)
        }
        render() {
            console.log(this, 999)
            return (
                <PComponent handleClick={this.handleClick}/>
            )
        }
    }
}

const HOCButton = HOC(Button)
const HOCDoubleButton = HOC(DoubleButton)

class NotFound extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="not-found">
                NotFound
                <HOCButton />
                <HOCDoubleButton />
            </div>
        )
    }

}

export default NotFound