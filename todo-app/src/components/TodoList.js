//부모 컴포넌트로부터 받은 데이터를 순회하며 각 항목을 
//TodoListItem 컴포넌트에 전달

import React from "react";
import TodoListItem from "./TodoListItem";
import '../Style/TodoList.scss';

const TodoList = ({todos, onRemove, onToggle}) => {
  return(
    <div className="TodoList">
    {todos.map(todo => ( //각 요소를 순회하여 배열로 변환하여 렌더링
      <TodoListItem todo={todo} key={todo.id}
      onRemove={onRemove}
      onToggle={onToggle}></TodoListItem>
    ))}
    </div>
  )
}
export default React.memo(TodoList);