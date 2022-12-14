import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import cat from "./images/cat.png";
import PropTypes from "prop-types";
import Tools from "./tools";
// 优化 1.属性校验
// 优化 2.清理

const Home = () => <p>我是 首页的内容</p>;
const Login = () => <p>我是login组件的内容</p>;
const App = () => (
  <Router>
    <div>
      <h1>默认路由和模糊匹配</h1>
      <Link to="/">首页</Link>
      <br></br>
      {/* 模糊匹配：只要to属性以某个path开头，就可以匹配这个path */}
      <Link to="/login/a/b/c">登录页面</Link>
      {/* 默认路由 */}
      {/* 添加exact属性，就是精确匹配 */}
      <Route exact path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
    </div>
  </Router>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
