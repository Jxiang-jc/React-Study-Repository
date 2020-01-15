import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/es/locale/zh_CN";

//全局样式
import "./stylesheets/main.scss";

//全局配置
import "./modules/config";

//全局路由
import Router from "./router";
//store
import store from "./store";

import { Provider } from "react-redux";

ReactDOM.render(
    <ConfigProvider locale={zhCN}>
        <Provider store={store}>
            <Router />
        </Provider>
    </ConfigProvider>,
    document.getElementById("root")
);
