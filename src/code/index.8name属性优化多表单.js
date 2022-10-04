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
  handleForm = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {/* 文本框 value*/}
        <input
          name="txt"
          type="text"
          value={this.state.txt}
          onChange={this.handleForm}
        />
        <br />
        {/* 富文本 value*/}
        <textarea
          name="content"
          value={this.state.content}
          onChange={this.handleForm}
        ></textarea>
        <br />
        {/* 下拉框 value*/}
        <select name="city" value={this.state.city} onChange={this.handleForm}>
          <option value="sh"> 上 海</option>
          <option value="bj"> 北京</option>
          <option value="nj"> 南京</option>
          <option value="tz"> 泰州</option>
        </select>
        <br />
        {/* 复选框 checked*/}
        <input
          name="isChecked"
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.handleForm}
        />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
