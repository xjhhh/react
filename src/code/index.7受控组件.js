import React from "react";
import ReactDOM from "react-dom";

// 受控组件
class App extends React.Component {
  state = {
    txt: "",
    content: "",
    city: "bj",
    isChecked: false,
  };
  handleChange = (e) => {
    this.setState({ txt: e.target.value });
  };
  handleContent = (e) => {
    this.setState({ content: e.target.value });
  };
  handleCity = (e) => {
    this.setState({ city: e.target.value });
  };
  handleChecked = (e) => {
    this.setState({ isChecked: e.target.checked });
  };
  render() {
    return (
      <div>
        {/* 文本框 value*/}
        <input
          type="text"
          value={this.state.txt}
          onChange={this.handleChange}
        />
        <br />
        {/* 富文本 value*/}
        <textarea
          value={this.state.content}
          onChange={this.handleContent}
        ></textarea>
        <br />
        {/* 下拉框 value*/}
        <select value={this.state.city} onChange={this.handleCity}>
          <option value="sh"> 上 海</option>
          <option value="bj"> 北京</option>
          <option value="nj"> 南京</option>
          <option value="tz"> 泰州</option>
        </select>
        <br />
        {/* 复选框 checked*/}
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleChecked}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
