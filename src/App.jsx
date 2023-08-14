import React from "react"
import { AddTodo } from "./components/AddTodo";
import { TodoList } from "./components/TodoList";
import { useApp } from "./hooks/useApp"
import './App.css';


export const App = () => {
  const [states, actions] = useApp();

  return (
    <div className="App">
      <h1 className='title'>Todo List</h1>
      {/* Todo追加領域 */}
      <section className='common-area'>
        <AddTodo
          addInputValue={states.addInputValue} 
          onChangeAddInputValue={actions.onChangeAddInputValue} 
          handleAddTodo={actions.handleAddTodo}
        />
      </section>
      {/* Todo一覧表示領域 */}
      <section className='common-area'>
        <TodoList todoList={states.todoList} handleDeleteTodo={actions.handleDeleteTodo} />
      </section>
    </div>
  );
}