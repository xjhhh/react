import React from "react";
import ReactDOM from "react-dom";

import "..CSS/index.css";
class App extends React.Component {
  state = {
    userName: "",
    userContent: "",
    comments: [
      { id: 1, name: "jack", content: "沙发！！！" },
      { id: 2, name: "rose", content: "板凳" },
      { id: 3, name: "tom", content: "楼主好人你" },
    ],
  };

  render_list() {
    const { comments } = this.state;
    if (comments.length === 0) {
      return <div className="no-comment">暂无评论，快去抢沙发吧</div>;
    } else {
      return (
        <ul>
          {comments.map((item) => (
            <li key={item.id}>
              <h3>评论人：{item.name}</h3>
              <p>评论内容：{item.content}</p>
            </li>
          ))}
        </ul>
      );
    }
  }

  handleForm = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addComment = () => {
    const { comments, userName, userContent } = this.state;
    if (userName.trim() === "" || userContent.trim() === "") {
      alert("请输入评论人和评论内容~");
      return;
    }
    this.setState({
      comments: [
        {
          id: comments.length + 1,
          name: userName,
          content: userContent,
        },
        ...comments,
      ],
      userName: "",
      userContent: "",
    });
  };
  render() {
    const { userName, userContent } = this.state;
    return (
      <div className="app">
        <div>
          <input
            className="user"
            type="text"
            placeholder="请输入评论人"
            name="userName"
            value={userName}
            onChange={this.handleForm}
          />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            name="userContent"
            value={userContent}
            onChange={this.handleForm}
          ></textarea>
          <br />
          <button onClick={this.addComment}>发表评论</button>
        </div>

        {this.render_list()}
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
