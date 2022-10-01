import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  handleClick(e) {
    //合成事件：兼容所有浏览器
    e.preventDefault();
    console.log("handleClick");
  }
  render() {
    return (
      <a href="https://itcast.cn/" onClick={this.handleClick}>
        {" "}
        点我，点我我
      </a>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
