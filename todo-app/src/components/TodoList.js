import TodoListItem from "./TodoListItem";
import './TodoList.scss';

const TodoList = ({todos}) => {
  return(
    <div className="TodoList">
    {todos.map(todo => ( //각 요소를 순회하여 배열로 변환하여 렌더링
      <TodoListItem todo={todo} key={todo.id}></TodoListItem>
    ))}
    </div>
  )
}

export default TodoList;