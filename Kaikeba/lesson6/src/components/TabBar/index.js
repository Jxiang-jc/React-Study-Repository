import React, { useState } from "react";
import MenuItem from "./MenuItem";
import "./index.scss";

function TabBar(props) {
    const { menu = [] } = props;
    const currentPath = window.location.pathname;
    return (
        <div className="tabBar">
            {menu.map(item => {
                return (
                    <MenuItem
                        key={item.title}
                        data={item}
                        active={currentPath === item.link}
                    ></MenuItem>
                );
            })}
        </div>
    );
}

export default TabBar;
