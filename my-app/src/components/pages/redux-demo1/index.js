import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import { Provider } from "./react-redux";

function createStore(reducer) {
    let state = null;
    const listeners = [];
    const subscribe = listener => listeners.push(listener);
    const getState = () => state;
    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };
    dispatch({}); // 初始化state
    return { getState, dispatch, subscribe };
}

const themeReducer = (state, action) => {
    if (!state)
        return {
            themeColor: "red"
        };
    switch (action.type) {
        case "CHANGE_COLOR":
            return { ...state, themeColor: action.themeColor };
    default:
        return state;
    }
};

const store = createStore(themeReducer);

class ReduxDemo extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <Header jxTest="Jxiang666" />
                    <Content />
                </div>
            </Provider>
        );
    }
}

export default ReduxDemo;
