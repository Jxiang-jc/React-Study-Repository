//按需加载和实现装饰器之后的页面如下：HocPage.js
import React, { Component } from "react";
import { Button } from "antd";

const foo = Cmp => props => {
    return (
        <div className="border">
            <Cmp {...props} />
        </div>
    );
};

const foo2 = Cmp => props => {
    return <div className="border" style={{ border: "solid 1px red" }}>
        <Cmp {...props} />
    </div>;
};

@foo
@foo2
class Child extends Component {
    render() {
        return <div className="border">Child</div>
    }
}

@foo2
class HocPage extends Component {
    render() {
        return (
            <div>
                <h1>HocPage</h1>
                <Child />
                <Button type="dashed">click</Button>
            </div>
        );
    }
}

export default HocPage;
