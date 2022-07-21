import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
// import SpreadOperator from "./SpreadOperator";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      alert("내용을 입력해주세요!");
      return;
    }

    // 새로운 할 일 데이터
    let newTodo = {
      id: Date.now(), // id는 유니크한 값
      title: value,
      completed: false,
    };

    // 원래 있던 할일 목록에 새로운 할 일 더해주고, 입력은 빈값 처리
    // prev 함수는 이전 State값을 가져옴
    setTodoData((prev) => [...prev, newTodo]);
    setValue("");
  };

  return (
    <div className="conteiner">
      {/* <SpreadOperator /> */}
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />

        <form style={{ display: "flex" }} onSubmit={handleSubmit}>
          <input
            type="text"
            name="value"
            style={{ flex: "10", padding: "5px" }}
            placeholder="할 일을 입력하세요."
            value={value}
            onChange={handleChange}
          />
          <input
            type="submit"
            value="입력"
            className="btn"
            style={{ flex: "1" }}
          />
        </form>
      </div>
    </div>
  );
}
