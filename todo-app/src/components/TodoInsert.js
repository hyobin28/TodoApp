//새로운 항목 입력하고 추가할 수 있음
//state를 통해 input 상태 관리
import {MdAdd} from 'react-icons/md';
import '../Style/TodoInsert.scss';
import { useState, useCallback } from 'react';

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {   //함수 재사용
    setValue(e.target.value);
  }, []);

  //폼이 제출될 때 실행
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');

      //sibmit 이벤트는 브라우저에서 새로고침 발생시킴
      //이를 방지하기 위해 아래 함수 호출
      e.preventDefault();
    }, 
    [onInsert, value], 
  );

  return(
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요."
      value={value}
      onChange={onChange}></input>
      <button type="submit"><MdAdd /></button>
    </form>
  )
}

export default TodoInsert;