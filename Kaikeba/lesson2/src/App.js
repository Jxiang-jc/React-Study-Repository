import React from "react";
import { Provider, Consumer } from "./AppContext";
import HomePage from "./pages/HomePage";
import HocPage from "./pages/HocPage";

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
        name: "哪吒"
    }
};

function App() {
    return (
        <div className="App">
            <Provider value={store}>
                {/* <Consumer>{ctx => <Child {...ctx} />}</Consumer> */}
                {/* <Consumer>{ctx => <HomePage {...ctx} />}</Consumer> */}
                {/* <HomePage /> */}
                <HocPage />
            </Provider>
        </div>
    );
}


export default App;