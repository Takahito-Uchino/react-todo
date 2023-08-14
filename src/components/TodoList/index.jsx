import "./style.css"

export const TodoList = (props) => {
  const { todoList, handleDeleteTodo } = props;

  return (
    <ul className='todo-list'>
      {todoList.map((todo) => {
        return (
          <li className='todo' key={todo.id}>
            <span className='todo-task'>{todo.title}</span>
            <i className="far fa-trash-alt fa-lg"
              onClick={() => handleDeleteTodo(todo.id, todo.title)}>
            </i>
          </li>
        );
      })}
    </ul>
  );
};