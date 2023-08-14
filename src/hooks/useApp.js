import React from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data"

export const useApp = () => {
  const [addInputValue, setAddInputValue] = React.useState("");
  const [todoList, setTodoList] = React.useState(INIT_TODO_LIST);
  const [uniqueId, setUniqueId] = React.useState(INIT_UNIQUE_ID);

  const onChangeAddInputValue = (event) => {
    setAddInputValue(event.target.value)
  };

  const handleAddTodo = (event) => {
    if (event.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;
      const newTodoList = todoList.concat({
        id: nextUniqueId,
        title: addInputValue
      });
      setTodoList(newTodoList);
      setUniqueId(nextUniqueId);
      setAddInputValue("");
    }
  };

  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のTodoを削除しますか？`)) {
      const newTodoList = todoList.filter((todo) => {
        return todo.id !== targetId;
      });
      setTodoList(newTodoList);
    }
  };

  return [
    {
      todoList,
      addInputValue
    },
    {
      onChangeAddInputValue,
      handleAddTodo,
      handleDeleteTodo
    }
  ];
};