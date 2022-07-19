import React, { Component } from "react";
import "./App.css";
// Class컴포넌트로 만들기
export default class App extends Component {
  render() {
    return (
      <div className="conteiner">
        컨데이너
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
        </div>
      </div>
    );
  }
}
