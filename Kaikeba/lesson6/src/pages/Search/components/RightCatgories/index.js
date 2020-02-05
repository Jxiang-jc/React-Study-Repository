import React from "react";
import "./index.scss";

export default function RightCatgories(props) {
    const { data = [], activeIndex } = props;
    return (
        <div className="secondCatgories">
            {data.map((item, index) => {
                return <Node key={"fir" + index} data={item} active={activeIndex === index} />;
            })}
        </div>
    );
}

function Node(props) {
    const { data, active } = props;
    const { id, title, children } = data;
    return (
        <div className={"node" + (active ? " node-active" : "")}>
            <div className="nodeTitle">{title}</div>
            <div className="nodeChildren">
                {children.map((item, index) => {
                    return <NodeItem key={"NodeItem" + index} data={item} />;
                })}
            </div>
        </div>
    );
}

function NodeItem(props) {
    const { data, active } = props;
    const { image, title } = data;
    return (
        <div className={"nodeItem" + (active ? " node-active" : "")}>
            <img src={image} alt="" />
            <div className="title">{title}</div>
        </div>
    );
}
