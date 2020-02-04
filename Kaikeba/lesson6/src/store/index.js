import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeReducer from './homeReducer'
import productReducer from './productListReducer'

const store = createStore(combineReducers({
    home: homeReducer,
    product: productReducer
}), applyMiddleware(thunk));

export default store;
