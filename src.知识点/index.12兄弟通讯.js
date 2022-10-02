import React from "react";
import ReactDOM from "react-dom";

class Counter extends React.Component {
  state = {
    count: 0,
  };
  onIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div>
        <Child1 count={this.state.count} />
        <Child2 onIncrement={this.onIncrement} />
      </div>
    );
  }
}
class Child1 extends React.Component {
  render() {
    return <h1>计数器：{this.props.count}</h1>;
  }
}
class Child2 extends React.Component {
  render() {
    return <button onClick={() => this.props.onIncrement()}>+1</button>;
  }
}
ReactDOM.render(<Counter />, document.getElementById("root"));
