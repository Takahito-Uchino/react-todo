import React from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data"

export const useApp = () => {
  const [addInputValue, setAddInputValue] = React.useState("");
  const [todoList, setTodoList] = React.useState(INIT_TODO_LIST);
  const [uniqueId, setUniqueId] = React.useState(INIT_UNIQUE_ID);
  const [searchKeyword, setSearchKeyword] = React.useState("");
  const [showTodoList, setShowTodoList] = React.useState(INIT_TODO_LIST);

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

      updateShowTodoList(newTodoList, searchKeyword);
      setTodoList(newTodoList);
      setUniqueId(nextUniqueId);
      setAddInputValue("");
    }
  };

  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`「${targetTitle}」のTodoを削除しますか？`)) {
      const newTodoList = todoList.filter((todo) => todo.id !== targetId);
      setTodoList(newTodoList);
      updateShowTodoList(newTodoList, searchKeyword);
    }
  };

  const handleSearchTodo = (e) => {
    const keyword = e.target.value;
    setSearchKeyword(keyword);
    updateShowTodoList(todoList, keyword)
  };

  const searchTodo = (targetTodoList, keyword) => {
    const newTodoList = targetTodoList.filter((todo) => {
      const regexp = new RegExp("^" + keyword, "i");
      return todo.title.match(regexp);
    });
    return newTodoList;
  };

  const updateShowTodoList = (newTodoList, keyword) => {
    if (keyword !== "") {
      setShowTodoList(searchTodo(newTodoList, keyword))
    } else {
      setShowTodoList(newTodoList);
    }
  }

  return [
    {
      showTodoList,
      addInputValue,
      searchKeyword
    },
    {
      onChangeAddInputValue,
      handleAddTodo,
      handleDeleteTodo,
      handleSearchTodo
    }
  ];
};