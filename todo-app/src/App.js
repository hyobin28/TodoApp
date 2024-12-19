//상태 관리와 기능 관리
//필요한 기능들을 자식 컴포넌트들로 props를 통해 전달

import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
  const array = [];
  for (let i=1; i<=100; i ++) {
    array.push({
      id:1, 
      text: `할일 ${i}`, 
      checked: false, 
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  //고유값으로 사용될 id
  //ref를 사용하여 변수 담기
  const nextId = useRef(4);
  const onInsert = useCallback(
    text => {
      const todo = {
        id:nextId.current, 
        text,
        checked: false, 
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;  //nextId 1씩 더하기
    }, 
    [], 
  );

  //삭제
  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    }, 
    [], 
  );

  //수정
  //id가 함수에 전달된 id와 일치하는지 확인
  const onToggle = useCallback(
    id => {
      setTodos(todos => 
        todos.map(todo => 
          todo.id === id ? {...todo, checked: !todo.checked} : todo, 
        ), 
      );
    }, 
    [], 
  );

  return <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}></TodoList>
    </TodoTemplate>
}

export default App;