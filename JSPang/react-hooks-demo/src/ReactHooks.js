import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
    useEffect(() => {
        console.log("useEffect=>老弟，你来了！Index页面");
        return () => {
            console.log("老弟，你走了!Index页面");
        };
    }, []);
    return <h2>Jxiang.com</h2>;
}

function List() {
    useEffect(() => {
        console.log("useEffect=>老弟，你来了！List页面");
    }, []);
    return <h2>List-Page</h2>;
}

function ReactHooks() {
    const [count, setCount] = useState(0);
    // React是根据useState出现的顺序来确定的, 因此，React Hooks 不能出现在条件判断语句总，它必须有完全一样的渲染顺序
    const [name, setName] = useState("Jxiang");

    // useEffect 相当于 componentDidMount 和 componentDidUpdate + componentWillUmount 生命周期函数
    useEffect(() => {
        console.log(`useEffect => You Click ${count} times`);
        return () => {
            console.log("====================");
        };
    });
    return (
        <div>
            <h2>{name}</h2>
            <p>You Click {count} times </p>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click me
            </button>

            <Router>
                <ul>
                    <li>
                        <Link to="/">首页</Link>
                    </li>
                    <li>
                        <Link to="/list">列表</Link>
                    </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list" component={List} />
            </Router>
        </div>
    );
}

export default ReactHooks;
