import React from "react";

export default function List({ todoData, setTodoData }) {
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
    <div>
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
    </div>
  );
}
