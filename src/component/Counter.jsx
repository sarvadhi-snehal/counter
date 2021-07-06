import React, { useState } from "react";
import './Counter.scss';
import { FaPlus, FaMinus } from 'react-icons/fa';


function Counter() {

  const [value, setValue] = useState(0);
  const increment = () => {
    setValue((prevState) => prevState + 1);
  };

  const decrement = () => {
    setValue((prevState) => prevState - 1);
    if(value <= 0) {
        setValue(0);
        alert('Please increment the value')
    }
   
  };

  const reset = () => {
    setValue(0);
  };
  return (
    <div className="counter">
      <div>
        <button onClick={increment}><FaPlus /></button>
        <p>{value}</p>

        <button onClick={decrement}><FaMinus /></button>
      </div>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;
