import React, { Component } from "react";
import PropTypes from "prop-types";

export const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
    class Connect extends Component {
        static contextTypes = {
            store: PropTypes.object
        };

        constructor() {
            super();
            this.state = {
                allProps: {}
            };
        }

        componentDidMount() {
            const {store} = this.context
            this._updateProps()
            store.subscribe(() => this._updateProps())
        }
        // 为了让 connect 返回新组件和被包装的组件使用参数保持一致，我们会把所有传给 Connect 的 props 原封不动地传给 WrappedComponent。所以在 _updateProps 里面会把 stateProps 和 this.props 合并到 this.state.allProps 里面，再通过 render 方法把所有参数都传给 WrappedComponent。
        _updateProps() {
            const { store } = this.context;
            // 防止 mapStateToProps 没有传入
            let stateProps = mapStateToProps ? mapStateToProps(store.getState(), this.props) : {}; // 额外传入
            // 防止 dispatchProps 没有传入
            let dispatchProps = mapDispatchToProps ? mapDispatchToProps(store.dispatch, this.props) : {};
            this.setState({
                allProps: { // 整合普通的props和从state生产的props
                    ...stateProps,
                    ...dispatchProps,
                    ...this.props
                }
            })
        }

        render() {
            // {...this.state.allProps} 意思是把这个对象里面的属性全部通过 `props` 方式传递进去
            return <WrappedComponent {...this.state.allProps} />;
        }
    }
    return Connect;
};
