import React, { Component } from "react";
import { Form, Input, Button } from "antd";

export default class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        };
    }
    submit = () => {
        console.log('submit', this.state)
    }
    render() {
        const {name, password} = this.state
        return (
            <div>
                <h1>FormPage</h1>
                <Form>
                    <Form.Item label="姓名">
                        <Input
                            value={name}
                            onChange={event => {
                                this.setState({ name: event.target.value });
                            }}
                        />
                    </Form.Item>
                    <Form.Item label="密码">
                        <Input
                            type="password"
                            value={password}
                            onChange={event => {
                                this.setState({ password: event.target.value });
                            }}
                        />
                    </Form.Item>
                </Form>
                <Button onClick={this.submit}>submit</Button>
            </div>
        );
    }
}
