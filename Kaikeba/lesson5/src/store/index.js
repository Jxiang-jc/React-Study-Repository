import { createStore, combineReducers } from "redux";

const initialUser = {
    isLogin: false,
    user: {
        name: null
    }
};

function loginReducer(state = { ...initialUser }, action) {
    switch (action.type) {
        case "getUserInfo":
            return { ...initialUser };
        case "loginSuccess":
            return { ...state, isLogin: true, user: { name: "Jxiang" } };
        default:
            return { ...initialUser };
    }
}

const store = createStore(
    combineReducers({
        user: loginReducer
    })
);

export default store;
