import React from "react";
import ReactDOM from "react-dom";

// 函数组件
// 必须有返回值
// 大写开头：据此区分组件  和 普通的react元素
function Hello() {
  return <div>这是我的 函数组件</div>;
}
ReactDOM.render(<Hello />, document.getElementById("root"));
