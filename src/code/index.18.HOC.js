import React from "react";
import ReactDOM from "react-dom";

import cat from "./images/cat.png";
import PropTypes from "prop-types";
import Tools from "./tools";
// 优化 1.属性校验
// 优化 2.清理

function withMouse(WrappedComponent) {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0,
    };
    handleMouseMove = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };
    componentDidMount() {
      window.addEventListener("mousemove", this.handleMouseMove);
    }
    componentWillUnmount() {
      window.removeEventListener("mousemove", this.handleMouseMove);
    }
    render() {
      return (
        <WrappedComponent {...this.state} {...this.props}></WrappedComponent> // 传递props
      );
    }
  }

  // 设置displayName。用于调试插件
  Mouse.displayName = `WithMouse-${Tools.getDisplayName(WrappedComponent)}`;
  return Mouse;
}

const Position = (props) => {
  console.log(props);
  return (
    <p>
      鼠标位置：(x: {props.x}, y: {props.y})
    </p>
  );
};
const MousePosition = withMouse(Position);

const Cat = (props) => (
  <img
    src={cat}
    alt="cat"
    style={{
      position: "absolute",
      left: props.x,
      top: props.y,
    }}
  ></img>
);
const MouseCat = withMouse(Cat);
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>高阶组件</h1>
        <MousePosition a="1" />
        <MouseCat />
      </div>
    );
  }
}
ReactDOM.render(<App> </App>, document.getElementById("root"));
