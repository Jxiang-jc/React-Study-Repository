import React, { Component } from "react";
import store from "../store/ReduxStore";

class ReduxPage extends Component {
    componentDidMount() {
        store.subscribe(() => {
            // this.forceUpdate();
            // this.setState({})
        });
    }

    render() {
        // console.log("store", store);
        return (
            <div>
                <h1>ReduxPage</h1>
                <p>{store.getState()}</p>
                <button onClick={() => store.dispatch({ type: "add" })}>add</button>
                <button onClick={() => store.dispatch({ type: "minus" })}>minus</button>
            </div>
        );
    }
}

export default ReduxPage;
