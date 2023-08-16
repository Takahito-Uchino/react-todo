import Styles from "./style.module.css"
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TodoList = (props) => {
  const { todoList, handleDeleteTodo } = props;

  return (
    <ul className={Styles.todoList}>
      {todoList.map((todo) => {
        return (
          <li className={Styles.todo} key={todo.id}>
            <span className={Styles.todoTask}>{todo.title}</span>
            <FontAwesomeIcon
              className={Styles.far}
              icon={faTrashAlt}
              size={"lg"}
              onClick={() => handleDeleteTodo(todo.id, todo.title)}
            />
          </li>
        );
      })}
    </ul>
  );
};