import React, { Component } from "react";
import "./Counter.css";
class Counter extends Component {
  state = {
    result: 0
  };

  clickPlus = e => {
    this.setState({
      result: this.state.result + 1
    });
  };

  clickMinus = e => {
    this.setState({
      result: this.state.result - 1
    });
  };
  render() {
    let { result } = this.state;
    let { name } = this.props;
    return (
      <div className="counter-box">
        <button onClick={this.clickPlus}>+1</button>
        <span className={result < 0 ? "counter-box--danger" : ""}>
          {name} {result}
        </span>
        <button onClick={this.clickMinus}>-1</button>
      </div>
    );
  }
}

export default Counter;
