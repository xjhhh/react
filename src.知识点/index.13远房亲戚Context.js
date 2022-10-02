import React from "react";
import ReactDOM from "react-dom";

const { Provider, Consumer } = React.createContext();
class App extends React.Component {
  render() {
    return (
      <Provider value="pink">
        <div>
          <Node />
        </div>
      </Provider>
    );
  }
}
class Node extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <SubNode />
      </div>
    );
  }
}
class SubNode extends React.Component {
  render() {
    return (
      <div>
        {" "}
        <Child />
      </div>
    );
  }
}
class Child extends React.Component {
  render() {
    return (
      <div>
        <Consumer>{(data) => <span>我是子节点--{data}</span>}</Consumer>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
