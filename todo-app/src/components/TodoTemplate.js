//화면 가운데 정렬, 앱 타이틀 보여줌
import './TodoTemplate.scss'

const TodoTemplate = ({children}) => {
  return(
    <div className="TodoTemplate"> 
      <div className="app-title">일정 관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;