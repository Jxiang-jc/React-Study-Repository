import React from 'react';
import ReactDOM from 'react-dom';
//swiper
import 'swiper/css/swiper.min.css'
//全局样式
import './stylesheets/main.scss'
//全局配置
import './modules/config'
// router相关
import {
    BrowserRouter as Router
} from 'react-router-dom'

import store from './store'
import { Provider } from 'react-redux'

import App from './App';
// import App from './App_1';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
