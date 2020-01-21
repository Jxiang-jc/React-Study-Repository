import React, { Component } from "react";
import kCreateForm from "../components/KCreateForm";

const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };

@kCreateForm
class MyFormPage extends Component {
    submit = () => {
        const { getFieldsValue, getFieldValue, validateFields } = this.props;
        validateFields((err, values) => {
            if (err) {
                console.log("err", err, values);
            } else {
                console.log("ok", values);
            }
        });
        // console.log("submit", getFieldsValue(), getFieldValue("name"));
    };
    render() {
        const { getFieldDecorator } = this.props;
        return (
            <div>
                <h1>MyFormPage</h1>
                {getFieldDecorator("name", nameRules)(<input placeholder="name" />)}
                {getFieldDecorator(
                    "password",
                    passwordRules
                )(<input type="password" placeholder="password" />)}
                <button onClick={this.submit}>submit</button>
            </div>
        );
    }
}

export default MyFormPage;
