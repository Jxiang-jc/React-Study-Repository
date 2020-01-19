import React from "react";
import { Provider, Consumer } from "./AppContext";
import HomePage from "./pages/HomePage";
import HocPage from "./pages/HocPage";
import UserPage from "./pages/UserPage";
import HooksPage from "./pages/HooksPage";
import UseReducerPage from "./pages/UseReducerPage";
import UseContextPage from "./pages/UseContextPage";

function Child(props) {
    return (
        <div>
            Child
            <p>{props.user.name}</p>
        </div>
    );
}

const store = {
    user: {
        name: "哪吒",
        Jxiang: '777'
    }
};

function App() {
    return (
        <div className="App">
            <Provider value={store}>
                {/* <Consumer>{ctx => <Child {...ctx} />}</Consumer> */}
                {/* <Consumer>{ctx => <HomePage {...ctx} />}</Consumer> */}
                {/* <HomePage /> */}
                {/* <HocPage /> */}
                {/* <UserPage /> */}
                {/* <HooksPage /> */}
                {/* <UseReducerPage /> */}
                <UseContextPage />
            </Provider>
        </div>
    );
}


export default App;