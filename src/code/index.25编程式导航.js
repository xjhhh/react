import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import cat from "./images/cat.png";
import PropTypes from "prop-types";
import Tools from "./tools";
// 优化 1.属性校验
// 优化 2.清理

class Login extends React.Component {
  render() {
    return (
      <div>
        <p>登陆页面</p>
        <button onClick={this.handleLogin}>登录 </button>
      </div>
    );
  }

  handleLogin = () => {
    // ...省略其他代码
    // 编程式导航
    this.props.history.push("/home");
  };
}

const Home = (props) => {
  const handleBack = () => {
    props.history.go(-1);
  };
  return (
    <div>
      <h2>我是后台首页</h2>
      <button onClick={handleBack}>返回登陆页面</button>
    </div>
  );
};
const App = () => (
  <Router>
    <div>
      <h1>编程式导航：</h1>
      <Link to="/login">去登录页面 </Link>
      <Route path="/login" component={Login}></Route>
      <Route path="/home" component={Home}></Route>
    </div>
  </Router>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
