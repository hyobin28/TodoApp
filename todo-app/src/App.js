import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1, 
      text: '리액트의 기초 알아보기', 
      checked: true, 
    }, 
    {
      id:2, 
      text: '컴포넌트 스타일링 해보기', 
      checked: true, 
    }, 
    {
      id:3, 
      text: '일정 관리 앱 만들어보기', 
      checked: false, 
    }, 
  ]);

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
      setTodos(prevTodos => prevTodos.concat(todo));
      nextId.current += 1;  //nextId 1씩 더하기
    }, 
    [], 
  );

  return <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList todos={todos}></TodoList>
    </TodoTemplate>
}

export default App;