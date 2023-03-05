import React, { useState } from 'react';
import style from "./calculator.module.css"

function Calculator() {
  const [input, setInput] = useState("");

  const handleInput = (event) => {
    setInput(input + event.target.value);
    console.log(event.target.value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      console.log(result);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };
  return (
    <div className={style.App}>
      <div className={style.calculator}>
        <input type="text" className={style.result} placeholder="Enter any number" value={input} readOnly />
        <div className={style.buttons}>
          <button value="1" onClick={handleInput}>1</button>
          <button value="2" onClick={handleInput}>2</button>
          <button value="3" onClick={handleInput}>3</button>
          <button value="+" onClick={handleInput}>+</button>
          <button value="4" onClick={handleInput}>4</button>
          <button value="5" onClick={handleInput}>5</button>
          <button value="6" onClick={handleInput}>6</button>
          <button value="-" onClick={handleInput}>-</button>
          <button value="7" onClick={handleInput}>7</button>
          <button value="8" onClick={handleInput}>8</button>
          <button value="9" onClick={handleInput}>9</button>
          <button value="*" onClick={handleInput}>*</button>
          <button value="0" onClick={handleInput}>0</button>
          <button value="." onClick={handleInput}>.</button>
          <button value="/" onClick={handleInput}>/</button>
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
