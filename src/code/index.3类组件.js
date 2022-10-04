import React from "react";
import ReactDOM from "react-dom";

// 类组件
// 大写开头
// 继承自react.Component, 必须提供render()
class Hello extends React.Component {
  render() {
    return <div> this is my first class Component</div>;
  }
}
ReactDOM.render(<Hello />, document.getElementById("root"));
