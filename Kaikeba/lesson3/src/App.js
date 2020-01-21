import React, { PureComponent } from "react";
import "antd/dist/antd.css";
import { Button } from "antd";
import HocPage from "./pages/HocPage";
import FormPage from "./pages/FormPage";
import FormPageAntd from "./pages/FormPageAntd";
import MyFormPage from "./pages/MyFormPage";
import DialogPage from "./pages/DialogPage";
import TreePage from "./pages/TreePage";
import CommenetListPage from "./pages/CommenetListPage";
import PureComponentPage from "./pages/PureComponentPage";
import ReactMemoPage from "./pages/ReactMemoPage";


function App() {
    return (
        <div className="App">
            {/* <Button type="primary">Button</Button> */}
            {/* <HocPage /> */}
            {/* <FormPage /> */}
            {/* <FormPageAntd /> */}
            {/* <MyFormPage /> */}
            {/* <DialogPage /> */}
            {/* <TreePage /> */}
            {/* <CommenetListPage /> */}
            {/* <PureComponentPage /> */}
            <ReactMemoPage />
        </div>
    )
}

export default App;
