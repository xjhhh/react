import React from "react";
import ReactDOM from "react-dom";

// 非受控组件  （不推荐）
class App extends React.Component {
  constructor() {
    super();
    this.txtRef = React.createRef();
  }
  getTxt = () => {
    console.log(this.txtRef.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.txtRef} />
        <button onClick={this.getTxt}>获取文本框</button>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
