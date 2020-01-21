import React, { Component, useState } from "react";

// export default function kCreateForm(Cmp) {
//     return class extends Component {
//         constructor(props) {
//             super(props);
//             this.state = {};
//             this.options = {};
//         }
//         handleChange = event => {
//             const { name, value } = event.target;
//             this.setState({
//                 [name]: value
//             });
//         };
//         getFieldDecorator = (field, option) => {
//             this.options[field] = option;
//             return InputCmp => {
//                 return (
//                     <>
//                         {React.cloneElement(InputCmp, {
//                             name: field,
//                             value: this.state[field] || "",
//                             onChange: this.handleChange
//                         })}
//                     </>
//                 );
//             };
//         };
//         getFieldsValue = () => {
//             return { ...this.state };
//         };
//         getFieldValue = field => {
//             return this.state[field];
//         };
//         validateFields = callback => {
//             const res = { ...this.state };
//             const err = [];
//             for (let item in this.options) {
//                 if (!res[item]) {
//                     err.push({ [item]: "error" });
//                 }
//             }
//             if (err.length) {
//                 callback(err, { ...res });
//             } else {
//                 callback(undefined, { ...res });
//             }
//         };
//         render() {
//             return (
//                 <Cmp
//                     {...this.props}
//                     getFieldDecorator={this.getFieldDecorator}
//                     getFieldsValue={this.getFieldsValue}
//                     getFieldValue={this.getFieldValue}
//                     validateFields={this.validateFields}
//                 />
//             );
//         }
//     };
// }

// 用hook时，第一个字母要小写。否则报错
const kCreateForm = Cmp => props => {
    const [state, setState] = useState({});
    const options = {};

    const handleChange = event => {
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        });
    };

    const getFieldDecorator = (field, option) => {
        options[field] = option;
        // 由React.createElement⽣成的元素不能修改，需要克隆⼀份再扩展
        return InputCmp => {
            return (
                <>
                    {React.cloneElement(InputCmp, {
                        name: field,
                        value: state[field] || "", // 控件值
                        onChange: handleChange
                    })}
                </>
            );
        };
    };

    const getFieldsValue = () => {
        return { ...state };
    };

    const getFieldValue = field => {
        return state[field];
    };

    const validateFields = callback => {
        const res = { ...state };
        const err = [];
        for (let key in options) {
            if (!res[key]) {
                err.push({ [key]: "error" });
            }
        }
        if (err.length) {
            callback(err, { ...res });
        } else {
            callback(undefined, { ...res });
        }
    };

    return (
        <Cmp
            {...props}
            getFieldDecorator={getFieldDecorator}
            getFieldsValue={getFieldsValue}
            getFieldValue={getFieldValue}
            validateFields={validateFields}
        />
    );
};

export default kCreateForm;
