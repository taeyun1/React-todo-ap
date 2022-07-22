import React, { useState } from "react";

const List = ({
  id,
  title,
  completed,
  todoData,
  setTodoData,
  provided,
  snapshot,
  handleClick,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

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

  // 수정 눌렀을때 실행
  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  // 수정 후 저장할때 실행
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.title = editedTitle;
      }
      return data;
    });
    setTodoData(newTodoData);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div
        className={`flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-200 border rounded`}
      >
        <div className="items-center w-3/4">
          <form onSubmit={handleSubmit}>
            <input
              value={editedTitle}
              className="w-full px-3 py-2 text-gray-500 rounded-md"
              onChange={handleEditChange}
            />
          </form>
        </div>
        <div className="items-center">
          <button className="px-4 py-2" onClick={handleSubmit}>
            저장
          </button>
          <button className="px-4 py-2" onClick={() => setIsEditing(false)}>
            취소
          </button>
        </div>
      </div>
    );
  } else {
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
          <span className={completed ? "line-through" : undefined}>
            {title}
          </span>
        </div>
        <div className="items-center">
          <button className="px-4 py-2" onClick={() => setIsEditing(true)}>
            수정
          </button>
          <button className="px-4 py-2" onClick={() => handleClick(id)}>
            x
          </button>
        </div>
      </div>
    );
  }
};
export default React.memo(List);
