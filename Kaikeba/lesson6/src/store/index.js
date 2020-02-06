import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeReducer from "./homeReducer";
import productReducer from "./productListReducer";
import searchReducer from "./searchReducer";
import userReducer from "./userReducer";

const store = createStore(
    combineReducers({
        home: homeReducer,
        product: productReducer,
        search: searchReducer,
        user: userReducer
    }),
    applyMiddleware(thunk)
);

export default store;
