import React from "react";
import ReactDOM from "react-dom";

import cat from "./images/cat.png";
import PropTypes from "prop-types";
import Tools from "./tools";
// 优化 1.属性校验
// 优化 2.清理

class App extends React.PureComponent {
  state = {
    random: 0,
  };

  handleClick = () => {
    this.setState(() => {
      return {
        random: Math.floor(Math.random() * 3),
      };
    });
  };

  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.random !== this.state.random;
  // }
  render() {
    console.log("renderApp");
    return (
      <div>
        <Box random={this.state.random}></Box>
        <button onClick={this.handleClick}>rand</button>
      </div>
    );
  }
}

class Box extends React.PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextProps.random !== this.props.random;
  // }
  render() {
    console.log("renderBox");
    return <h1>随机数：{this.props.random}</h1>;
  }
}
ReactDOM.render(<App> </App>, document.getElementById("root"));
