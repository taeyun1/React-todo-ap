import React from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import List from "./List";

const Lists = ({ todoData, setTodoData, handleClick }) => {
  const handleEnd = (result) => {
    // console.log("result", result);

    if (!result.destination) return;

    // 불변성을 지켜주기 위해 새로운 todoData생성
    const newTodoData = todoData;

    // 1. 변경시키는 아이템을 배열에서 지워준다.
    // 2. return 값으로 지워진 아이템을 잡아준다.
    const [reorderedItem] = newTodoData.splice(result.source.index, 1);

    // 원하는 자리에 reorderItem을 insert 해준다.
    newTodoData.splice(result.destination.index, 0, reorderedItem);
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData));
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId="todo">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {/* JSX Key 속성이란 : 요소의 리스트를 나열할때는 Key를 넣어줘야함, React가 변경, 추가 또는 제거된 항목을 식별하는데 도움을줌. 요소에 안정적인 ID를 부여하려면 배열 내부 요소에 Key를 제공해야함 */}
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <List
                      key={data.id}
                      id={data.id}
                      title={data.title}
                      completed={data.completed}
                      todoData={todoData}
                      setTodoData={setTodoData}
                      provided={provided}
                      snapshot={snapshot}
                      handleClick={handleClick}
                    />
                  )}
                </Draggable>
              ))}
              {/* 드래그 자연스럽게 설정 */}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default React.memo(Lists);

// Form에서 타이핑할때, Form컴포넌트와 그 State값을 가지고 있는
// App 컴포넌트만 렌더링이 되야 하는데, Lists랑 List컴포넌트 들도 렌더링이 되고있음
// React.memo메모로 렌더링이 되면 안되는 컴포넌트들 감싸주면 됨
