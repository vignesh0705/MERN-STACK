import { useState } from "react";

const UseStateComponent = () => {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>This is useState Example</h1>
      <button onClick={() => setNum(num - 1)}>-</button>
      <h4>The number is {num}</h4>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(0)}>Reset</button>
    </div>
  );
};

export default UseStateComponent;
