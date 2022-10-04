import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";

const App = (props) => {
  const arr = props.colors;
  const list = arr.map((item, index) => <li key={index}>{item}</li>);
  return <ul>{list}</ul>;
};
App.propTypes = {
  colors: PropTypes.array,
};

App.defaultProps = {
  colors: ["green"],
};

ReactDOM.render(<App colors={["red"]}> </App>, document.getElementById("root"));
// ReactDOM.render(<App> </App>, document.getElementById("root"));

// npm i prop-types
