import React from "react";
import ReactDOM from "react-dom";

import cat from "./images/cat.png";
import PropTypes from "prop-types";
import Tools from "./tools";
// 优化 1.属性校验
// 优化 2.清理

class App extends React.Component {
  state = {
    count: 1,
  };

  handleClick = () => {
    // this.setState({
    //   count: this.state.count + 1,
    // });

    // 推荐语法
    this.setState(
      (state, props) => {
        return {
          count: state.count + 1,
        };
      },
      // 状态更新后并且重新渲染后，立即执行
      () => {
        console.log(this.state.count);
        console.log(document.getElementById("title").innerText);
        document.title = this.state.count;
      }
    );
    console.log(this.state.count);
  };

  render() {
    // console.log("render");
    return (
      <div>
        <h1 id="title">计数器：{this.state.count}</h1>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }

  componentDidUpdate() {
    // console.log(this.state);
  }
}
ReactDOM.render(<App> </App>, document.getElementById("root"));
