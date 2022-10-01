import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // constructor(){
  //   super();
  //   this.state = {
  //     count: 0
  //   }
  // }
  // state = {
  //   //简化语法(推荐)
  //   count: 0,
  //   test: "a",
  // };
  //思想：数据驱动视图

  constructor() {
    super();
    this.state = {
      //简化语法(推荐)
      count: 0,
      test: "a",
    };
    // this.onIncrement = this.onIncrement.bind(this);三。Function.bind绑定this
  }
  onIncrement = () => {
    //一。class的实例方法（推荐）
    console.log(this);
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>计数器：{this.state.count}</h1>
        {/* 二。箭头函数绑定this
        <button onClick={() => this.onIncrement()}>+1</button> */}

        <button onClick={this.onIncrement}>+1</button>

        {/* <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1, 
            });
          }}
        >
          +1
        </button> */}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
