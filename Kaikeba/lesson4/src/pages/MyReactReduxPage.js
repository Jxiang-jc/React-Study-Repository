import React, { Component } from "react";
import { connect } from "../kReactRedux";

class MyReactReduxPage extends Component {
  render() {
    console.log("props", this.props);
    const { counter, add, minus } = this.props;
    return (
      <div>
        <h1>MyReactReduxPage</h1>
        <p>{counter}</p>
        <button onClick={add}>add</button>
        <button onClick={minus}>minus</button>
      </div>
    );
  }
}

export default connect(
  //mapStateToProps
  state => ({ counter: state }),
  //mapDispatchToProps
  {
    add: () => ({ type: "add" }),
    minus: () => ({ type: "minus" }),
  },
)(MyReactReduxPage);