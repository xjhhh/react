import React from "react";
import ReactDOM from "react-dom";

class Parent extends React.Component {
  state = {
    lastName: "王",
    childMsg: "",
  };

  getChildMsg = (data) => {
    console.log("子组件传过来的数据", data);
    this.setState({ childMsg: data });
  };
  render() {
    return (
      <div className="parent">
        父组件：{this.state.childMsg}
        <Child name={this.state.lastName} sendMsg={this.getChildMsg} />
      </div>
    );
  }
}
class Child extends React.Component {
  state = {
    msg: "爸爸，我姓李",
  };

  handleClick = () => {
    this.props.sendMsg(this.state.msg);
  };
  render() {
    return (
      <div className="child">
        子组件props: {this.props.name}
        <button onClick={this.handleClick}>点我，给父组件传递数据</button>
      </div>
    );
  }
}
ReactDOM.render(
  <Parent />, //还可以传函数、jsx
  document.getElementById("root")
);
