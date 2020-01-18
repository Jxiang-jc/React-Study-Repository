import React, { Component } from "react";
import { handleConsumer } from "../AppContext";


export default class TopBar extends Component {
    render() {
        const TopBar = handleConsumer(TopBarHandle);
        return <TopBar />;
        // <Consumer>{ctx => <div className="topBar">{ctx.user.name}</div>}</Consumer>;
    }
}

function TopBarHandle(props) {
    return <div className="topBar">{props.user.name}</div>;
}
