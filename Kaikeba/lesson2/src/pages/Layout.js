import React, { Component } from "react";
import TopBar from "../components/TopBar";

export default class Layout extends Component {
    componentDidMount() {
        const { title = "商城" } = this.props;
        document.title = title;
    }

    render() {
        const { children, showTopBar } = this.props;
        const a = [];
        if (children.$$typeof) {
            a.push(children);
        } else {
            // 具名
            for (let item in children) {
                a.push(children[item]);
            }
        }
        return (
            <div>
                {showTopBar && <TopBar />}
                {/* {children.btn} */}
                {/* {children.txt} */}
                {a.map((item, idx) => {
                    return <React.Fragment key={idx}>{item}</React.Fragment>;
                })}
            </div>
        );
    }
}
