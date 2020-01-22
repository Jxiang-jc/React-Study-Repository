import React, { Component } from "react";
import { connect } from "react-redux";
import { add, minus, asyAdd } from "../action/reactReduxPage";

class ReactReduxPage extends Component {
    render() {
        console.log("Jxiang", this.props);
        const { counter, add, minus, asyAdd } = this.props;
        return (
            <div>
                <h1>ReactReduxPage</h1>
                <p>{counter}</p>
                <button onClick={add}>add</button>
                <button onClick={minus}>minus</button>
                <button onClick={asyAdd}>asyAdd</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        counter: state.counter
    };
};

const mapDispatchToProps = {
    add,
    minus,
    asyAdd
};

export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxPage);
