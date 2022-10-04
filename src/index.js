import React from "react";
import ReactDOM from "react-dom";

import img from "./images/cat.png";
import PropTypes from "prop-types";
// 优化 1.属性校验
// 优化 2.清理
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
    window.addEventListener("mousemove", this.handleMouseMove); // 监听鼠标移动
  }
  render() {
    // return null;
    // return this.props.render(this.state);
    return this.props.children(this.state);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }
}
Mouse.propTypes = {
  children: PropTypes.func.isRequired,
};
class App extends React.Component {
  render() {
    return (
      <div>
        <h1> render props模式</h1>
        {/* <Mouse
          render={(mouse) => {
            return (
              <h1>
                鼠标位置： {mouse.x} {mouse.y}
              </h1>
            );
          }}
        /> */}
        {/* 推荐使用children代替render属性 */}
        <Mouse>
          {(mouse) => {
            return (
              <h1>
                鼠标位置： {mouse.x} {mouse.y}
              </h1>
            );
          }}
        </Mouse>
        {/* <Mouse
          render={(mouse) => {
            return (
              <img
                src={img}
                alt="cat"
                style={{
                  position: "absolute",
                  top: mouse.y - 62.5,
                  left: mouse.x - 38,
                }}
              ></img>
            );
          }}
        ></Mouse> */}
      </div>
    );
  }
}
ReactDOM.render(<App> </App>, document.getElementById("root"));
