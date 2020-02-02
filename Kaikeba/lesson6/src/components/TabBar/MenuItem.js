import React from "react";
import { Link } from "react-router-dom";

function MenuItem(props) {
    const { data, active } = props;
    const { link, title, icon } = data;
    return (
        <div className="menuItem">
            <Link to={link} className={"menuItem" + (active ? "active" : "")}>
                <div className={"iconfont icon-" + icon}></div>
                <div className="name">{title}</div>
            </Link>
        </div>
    );
}

export default MenuItem;
