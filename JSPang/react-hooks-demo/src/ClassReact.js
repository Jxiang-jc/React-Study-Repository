import React, { Component } from "react";

export class ClassReact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        console.log(`componentDidMount You Click${this.state.count} times`)
    }

    componentDidUpdate() {
        console.log(`componentDidUpdate You Click${this.state.count} times`)
    }
    addCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    };
    render() {
        const { count } = this.state;
        return (
            <div>
                <p>You Click {count} times</p>
                <button onClick={this.addCount}>Click me</button>
            </div>
        );
    }
}

export default ClassReact;
