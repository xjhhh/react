import React from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h1>子节点：{props.children}</h1>
    </div>
  );
};

const Test = () => <button>我是button</button>;
ReactDOM.render(
  <App>
    halohalo <p>aaa</p> <Test></Test>
    {() => {
      console.log("  Function");
    }}
  </App>,
  document.getElementById("root")
);
