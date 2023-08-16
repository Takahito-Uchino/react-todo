import React from "react";
import { AddTodo } from "./components/AddTodo";
import { InputForm } from "./components/Common/InputForm";
import { TodoList } from "./components/TodoList";
import { useApp } from "./hooks/useApp";
import Styles from './App.module.css';

export const App = () => {
  const [states, actions] = useApp();

  return (
    <div className={Styles.app}>
      <h1 className={Styles.title}>Todo List</h1>
      {/* Todo追加領域 */}
      <section className={Styles.commonArea}>
        <AddTodo
          addInputValue={states.addInputValue} 
          onChangeTodo={actions.onChangeAddInputValue} 
          handleAddTodo={actions.handleAddTodo}
        />
      </section>
      {/* Todo検索フォームエリア */}
      <section className={Styles.commonArea}>
        <InputForm
          placeholder={"Search Keyword"}
          value={states.searchKeyword}
          handleChangeValue={actions.handleSearchTodo}
        />
      </section>
      {/* Todo一覧表示領域 */}
      <section className={Styles.commonArea}>
        <TodoList 
          todoList={states.showTodoList} 
          handleDeleteTodo={actions.handleDeleteTodo}
        />
      </section>
    </div>
  );
}