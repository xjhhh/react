import React from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import cat from "./images/cat.png";
import PropTypes from "prop-types";
import Tools from "./tools";
// 优化 1.属性校验
// 优化 2.清理

const Home = () => <p>你能看到我吗？</p>;
const App = () => (
  <Router>
    <div>
      <h1>默认路由</h1>
      <Route path="/" component={Home}></Route>
    </div>
  </Router>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
