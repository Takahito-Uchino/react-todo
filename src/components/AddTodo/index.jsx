import React from "react";
import "./style.css"

export const AddTodo = (props) => {
  const { addInputValue, onChangeAddInputValue, handleAddTodo } = props;

  return (
    <>
      <h2 className='add-title'>ADD TODO</h2>
          <input 
            type="text" 
            value={addInputValue} 
            onChange={onChangeAddInputValue} 
            onKeyDown={handleAddTodo}
          />
    </>
  )
}