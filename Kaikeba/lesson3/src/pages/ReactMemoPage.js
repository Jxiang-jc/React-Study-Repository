import React, { Component, memo, useState } from "react";

export default class ReactMemoPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            counter: 0,
            obj: { num: 0 }
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
                // counter: this.state.counter + 1
            });
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    render() {
        const { counter, date, obj } = this.state;
        console.log("render", counter);
        return (
            <div>
                <h1>ReactMemoPage</h1>
                <p>{date.toLocaleTimeString()}</p>
                <MemoCounter counter={counter} /* obj={obj} */ />
            </div>
        );
    }
}
// memo 主要是针对props的变换作比较
const MemoCounter = memo(props => {
    console.log("MemoCounter");
    const [num, setNum] = useState(0);
    return (
        <div>
            {props.counter}
            <button onClick={() => setNum(num + 1)}>{num}</button>
        </div>
    );
});
