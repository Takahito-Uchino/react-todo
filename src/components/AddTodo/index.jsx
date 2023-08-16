import React from "react";
import { InputForm } from "../Common/InputForm";
import Styles from "./style.module.css"

export const AddTodo = (props) => {
  const { addInputValue, onChangeTodo, handleAddTodo } = props;

  return (
    <>
      <h2 className={Styles.addTitle}>ADD TODO</h2>
          {/* <input 
            className={Styles.input}
            type="text"
            placeholder="New Todo"
            value={addInputValue} 
            onChange={onChangeAddInputValue} 
            onKeyDown={handleAddTodo}
          /> */}
      <InputForm
        placeholder={"Now Todo"}
        type="text"
        inputValue={addInputValue}
        handleChangeValue={onChangeTodo} 
        handleKeyDown={handleAddTodo}
      />
    </>
  )
}