import React from "react";
import ReactDOM from "react-dom";
// 只有类组件才有生命周期。函数组件没有
class App extends React.Component {
  // 创建组件时，最先执行。
  constructor(props) {
    super(props);
    console.warn("constructor");
    // 初始化state
    this.state = {
      count: 0,
    };
    // 为事件处理方法绑定this
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
    });
    // this.forceUpdate();
  };
  // 每次组件渲染都会触发
  render() {
    // 渲染UI（！！！不能调用setState）
    console.warn("render");
    return (
      <div>
        {this.state.count > 3 ? (
          <p>死了</p>
        ) : (
          <Counter count={this.state.count} />
        )}
        <button id="btn" onClick={this.handleClick}>
          点击
        </button>
      </div>
    );
  }

  // 组件挂载（完成DOM渲染）后
  componentDidMount() {
    console.warn("componentDidMount");
    // 发送网络(ajax)请求
    // axios.get('http://api......')
    // DOM操作
    const title = document.getElementById("title");
    console.log(title);
  }
}

class Counter extends React.Component {
  render() {
    console.warn("render");
    return <h1 id="title">次数：{this.props.count}</h1>;
  }

  // 组件更新（完成DOM渲染后）
  // !!! 如果要调用setState()，必须放在if中
  componentDidUpdate(prevProps) {
    console.warn("componentDidUpdate");
    // 比较更新前后的props是否相同
    console.log(prevProps, this.props);
    if (prevProps.count !== this.props.count) {
      this.setState({});
      // 发送ajax请求
    }
    // 操作DOM
    const title = document.getElementById("title");
    console.log(title.innerHTML);
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      console.log("定时器");
    }, 500);
  }

  // 组件卸载时(从页面中消失)
  componentWillUnmount() {
    console.warn("componentWillUnmount");

    // 清理工作（定时器，监听）
    clearInterval(this.timerId);
  }
}

ReactDOM.render(<App> </App>, document.getElementById("root"));
