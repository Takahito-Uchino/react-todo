import React from "react";
import Styles from "./styles.module.css"

export const InputForm = (props) => {
  const { inputValue, placeholder, handleChangeValue, handleKeyDown } = props;

  return (
    <>
      <input 
        className={Styles.input}
        type="text"
        placeholder={placeholder}
        value={inputValue} 
        onChange={handleChangeValue} 
        onKeyDown={handleKeyDown}
      />
    </>
  )
}