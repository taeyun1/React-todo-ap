import React, { Component } from "react";
import "./App.css";
// Class컴포넌트로 만들기
export default class App extends Component {
  btnStyle = {
    color: "#000",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  getStyle = () => {
    return {
      padding: "15px 5px 15px 5px",
      borderBottom: "1px dotted #000",
      // textDecoration: "none",
    };
  };

  todoData = [
    {
      id: "1",
      title: "공부하기",
      completed: true,
    },
    {
      id: "2",
      title: "청소하기",
      completed: false,
    },
  ];

  render() {
    return (
      <div className="conteiner">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>

            {this.todoData.map((data) => (
              <div style={this.getStyle()} key={data.id}>
                <input type="checkbox" defaultChecked={data.completed} />
                {data.title}
                <button style={this.btnStyle}>x</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
