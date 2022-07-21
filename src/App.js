import React, { useState } from "react";
import "./App.css";
// import SpreadOperator from "./SpreadOperator";

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    color: "#000",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right",
  };

  // completed값이 true(체크)면 선긋기
  const getStyle = (completed) => {
    return {
      padding: "15px 5px 15px 5px",
      borderBottom: "1px dotted #000",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const handleClick = ({ dataId }) => {
    let newTodoData = todoData.filter((data) => data.id !== dataId);
    console.log("newTodoData", newTodoData);
    setTodoData(newTodoData);
  };

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

  // 체크 박스 선택시 줄긋기
  // 해당 id값을 받고, 받은 id랑,  todoData의 id랑 일치하면, todoData의 completed값을 변경시킴
  const handleCompleChange = ({ dataId }) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === dataId) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div className="conteiner">
      {/* <SpreadOperator /> */}
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        {/* JSX Key 속성이란 : 요소의 리스트를 나열할때는 Key를 넣어줘야함, React가 변경, 추가 또는 제거된 항목을 식별하는데 도움을줌. 요소에 안정적인 ID를 부여하려면 배열 내부 요소에 Key를 제공해야함 */}
        {todoData.map((data) => (
          <div style={getStyle(data.completed)} key={data.id}>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleChange({ dataId: data.id })}
            />
            {data.title}
            <button
              style={btnStyle}
              onClick={() => handleClick({ dataId: data.id })}
            >
              x
            </button>
          </div>
        ))}

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
