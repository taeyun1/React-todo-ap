import React, { useState, useCallback } from "react";
import "./App.css";
import Form from "./components/Form";
import Lists from "./components/Lists";

// 로컬스토리지에 Key에 "todoData"가 있으면? Key에 todoData의 값을 가져옴, 없으면 빈배열
const initialTodoData = localStorage.getItem("todoData")
  ? JSON.parse(localStorage.getItem("todoData"))
  : [];

function App() {
  const [todoData, setTodoData] = useState(initialTodoData);
  const [value, setValue] = useState("");

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

    // 원래 있던 할 일에 새로운 할 일 더해주기
    // prev 함수는 이전 State값을 가져옴
    setTodoData((prev) => [...prev, newTodo]);
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo]));

    // 입력란에 있던 글씨 지워주기
    setValue("");
  };

  // useCallback사용
  const handleClick = useCallback(
    (dataId) => {
      let newTodoData = todoData.filter((data) => data.id !== dataId);
      // console.log("newTodoData", newTodoData);
      setTodoData(newTodoData);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
    },
    [todoData] // todoData가 변경될때마다. 실행
  );

  // 리스트 전부삭제 버튼
  const handleRemoveClick = () => {
    setTodoData([]);
    localStorage.setItem("todoData", JSON.stringify([]));
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
      <div className="w-full p-6 m-4 bg-white rounded-lg shadow-xl lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <div>
            <button className="hover:text-gray-400" onClick={handleRemoveClick}>
              전부삭제
            </button>
          </div>
        </div>
        <Lists
          handleClick={handleClick}
          todoData={todoData}
          setTodoData={setTodoData}
        />
        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}

export default App;
