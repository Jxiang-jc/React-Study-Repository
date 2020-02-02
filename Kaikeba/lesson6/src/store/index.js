import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import homeReducer from './homeReducer'

const store = createStore(combineReducers({
    home: homeReducer
}), applyMiddleware(thunk));

export default store;
