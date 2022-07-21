import React from "react";

export default function List({ todoData, setTodoData }) {
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
        <div key={data.id}>
          <div className="flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 bg-gray-200 border rounded">
            <div className="items-center">
              <input
                type="checkbox"
                defaultChecked={false}
                className="mr-1.5"
                onChange={() => handleCompleChange({ dataId: data.id })}
              />
              <span className={data.completed ? "line-through" : undefined}>
                {data.title}
              </span>
            </div>
            <div className="items-center">
              <button
                className="px-4 py-1"
                onClick={() => handleClick({ dataId: data.id })}
              >
                x
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
