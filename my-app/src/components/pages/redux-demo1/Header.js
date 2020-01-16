import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "./connect";
const mapStateToProps = state => {
    return {
        themeColor: state.themeColor
    };
};

class Header extends Component {
    static contextTypes = {
        store: PropTypes.object
    };
    // constructor() {
    //     super();
    //     this.state = { themeColor: "" };
    // }
    // componentWillMount() {
    //     this._updateThemeColor();
    // }
    // componentDidMount() {
    //     const { store } = this.context;
    //     store.subscribe(() => this._updateThemeColor());
    // }
    // _updateThemeColor() {
    //     const { store } = this.context;
    //     const state = store.getState();
    //     this.setState({ themeColor: state.themeColor });
    // }
    render() {
    return <h1 style={{ color: this.props.themeColor }}>React.js 小书 -- {this.props.jxTest}</h1>;
    }
}

Header = connect(mapStateToProps)(Header);

export default Header;
