import React, { Component } from "react";

// function Child(props) {
//     return <div className="border">Child</div>;
// }

const foo = Cmp => props => {
    return (
        <div className="border">
            <Cmp {...props} />
        </div>
    );
};

// ES7 装饰器
@foo
class Child extends Component {
    render() {
        return <div className="border">Child</div>
    }
}

export default class HocPage extends Component {
    render() {
        // const Foo = foo(Child);
        return (
            <div>
                <h1>HocPage</h1>
                {/* <Foo /> */}
                <Child />
            </div>
        );
    }
}
