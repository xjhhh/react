import React from "react";

import ReactDOM from "react-dom";

import "../CSS/index.css";
// import { createRoot } from 'react-dom/client'

// const title = React.createElement('h1', null, 'Hello world !!!');

// ReactDOM.render(title, document.getElementById('root'));
// // const container = document.getElementById('root');
// // const root = createRoot(container);
// // root.render(title);
// // react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18.
// // Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17.
// // Learn more: https://reactjs.org/link/switch-to-createroot

const songs = [
  { id: 1, name: "chixjd" },
  { id: 2, name: "xwzydr" },
  { id: 3, name: "nsn" },
];
const list = (
  <ul style={{ color: "blue" }} className="ccc">
    {songs.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);
// 渲染react元素
ReactDOM.render(list, document.getElementById("root"));
