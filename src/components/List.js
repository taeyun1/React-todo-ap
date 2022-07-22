import React from "react";

const List = ({
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
}) => {
  const handleClick = (dataId) => {
    let newTodoData = todoData.filter((data) => data.id !== dataId);
    console.log("newTodoData", newTodoData);
    setTodoData(newTodoData);
  };

  // 체크 박스 선택시 줄긋기
  // 해당 id값을 받고, 받은 id랑,  todoData의 id랑 일치하면, todoData의 completed값을 변경시킴
  const handleCompleChange = (dataId) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === dataId) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div
      key={id}
      {...provided.draggableProps}
      ref={provided.innerRef}
      {...provided.dragHandleProps}
      // 드래그를 했을때는? 진하게, 놨을때는?: 기본
      className={`${
        snapshot.isDragging ? "bg-gray-400" : "bg-gray-200"
      } flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-200 border rounded`}
    >
      <div className="items-center">
        <input
          type="checkbox"
          defaultChecked={false}
          className="mr-1.5"
          onChange={() => handleCompleChange(id)}
        />
        <span className={completed ? "line-through" : undefined}>{title}</span>
      </div>
      <div className="items-center">
        <button className="px-4 py-1" onClick={() => handleClick(id)}>
          x
        </button>
      </div>
    </div>
  );
};

export default List;
