import React, { Component } from "react";
import store from "../store/MyReduxStore";

export default class MyReduxPage extends Component {
    componentDidMount() {
        store.subscribe(() => {
            this.forceUpdate();
            // this.setState({});
        });
    }
    asyAdd = () => {
        store.dispatch(dispatch => {
            setTimeout(() => {
                dispatch({ type: "add" });
            }, 1000);
        });
    };
    render() {
        // console.log("store", store);
        return (
            <div>
                <h1>MyReduxPage</h1>
                <p>{store.getState()}</p>
                <button onClick={() => store.dispatch({ type: "add" })}>add</button>
                <button onClick={() => store.dispatch({ type: "minus" })}>minus</button>
                <button onClick={this.asyAdd}>asyAdd</button>
            </div>
        );
    }
}
