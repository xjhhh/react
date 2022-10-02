import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  constructor(props) {
    //推荐参数props
    super(props);
    console.log(props);
  }
  render() {
    console.log(this.props); //props只读
    return (
      <div>
        <h1> props: </h1>
      </div>
    );
  }
}
ReactDOM.render(
  <Hello name="jack" age="19" />, //还可以传函数、jsx
  document.getElementById("root")
);
// const Hello = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1> props: {props.name}</h1>
//     </div>
//   );
// };
// ReactDOM.render(
//   <Hello name="jack" age="19" />,
//   document.getElementById("root")
// );
