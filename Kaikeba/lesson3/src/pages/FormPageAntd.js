import React, { Component } from "react";
import { Form, Input, Button } from "antd";

const nameRules = { required: true, message: "please input ur name" };
const passwordRules = { required: true, message: "please input ur password" };

@Form.create()
class FormPageAntd extends Component {
    submit = () => {
        // console.log('submit', this.state)
        const { getFieldsValue, getFieldValue, validateFields } = this.props.form;
        // console.log("TCL: FormPageAntd -> submit -> getFieldsValue", getFieldsValue(), getFieldValue('name'))
        validateFields((err, values) => {
            if (err) {
                console.log("err", err);
            } else {
                console.log("submit", values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <h1>FormPage</h1>
                <Form>
                    <Form.Item label="姓名">
                        {getFieldDecorator("name", { rules: [nameRules] })(<Input />)}
                    </Form.Item>
                    <Form.Item label="密码">
                        {getFieldDecorator("password", { rules: [passwordRules] })(
                            <Input type="password" />
                        )}
                    </Form.Item>
                </Form>
                <Button onClick={this.submit}>submit</Button>
            </div>
        );
    }
}

export default FormPageAntd;
