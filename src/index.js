import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import cat from "./images/cat.png";
import PropTypes from "prop-types";
import Tools from "./tools";
// 优化 1.属性校验
// 优化 2.清理

const First = () => <p>页面1的内容</p>
const Home = () => <h3>主页的内容</h3>

const App = () => (
  // Router包裹整个应用
  <Router>
    <div>
      <h1>React 路由基础</h1>
      {/* 指定路由入口 */}
      <Link to="/first">页面1</Link>
      <br></br>
      <Link to="/home">主页</Link>
      {/* 指定路由出口 */}
      <Routes>
        <Route path="/first" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        {/*   第二个first不会被匹配到 */}
        <Route path="/first" element={<First/>} />
      </Routes>
    </div>
  </Router>
)
ReactDOM.render(<App> </App>, document.getElementById("root"));
