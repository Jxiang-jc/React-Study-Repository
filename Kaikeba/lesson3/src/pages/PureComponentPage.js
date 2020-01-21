import React, { Component, PureComponent } from "react";
// 定制了shouldComponentUpdate后的Component
// 缺点是必须要⽤class形式，⽽且要注意是浅⽐较
export default class extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            // obj: {
            //     num: 0
            // }
        };
    }

    setCounter = () => {
        console.log("setCounter");
        this.setState({
            counter: 100,
            // obj: {
            //     num: 200
            // }
        });
    };

    render() {
        console.log("render");
        const { counter } = this.state;
        return (
            <div>
                <h1>PureComponent</h1>
                <div onClick={this.setCounter}>{counter}</div>
            </div>
        );
    }
}
