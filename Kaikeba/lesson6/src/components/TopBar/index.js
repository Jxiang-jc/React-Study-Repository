import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function TopBar(props) {
    const { history, title = "", children } = props;
    const goBack = () => {
        history.goBack();
    };
    return (
        <div className="topBar">
            {history ? (
                <i className="iconfont icon-jiantou-copy" onclick={goBack} />
            ) : (
                <Link to="/home">
                    <i className="iconfont icon-jiantou-copy" />
                </Link>
            )}
            {children}
            <div className="title">{title}</div>
        </div>
    );
}

export default TopBar;
