import React from 'react';
import Custom_hooks1 from './Custom_hooks1';
const Use_of_Custom_hooks = () => {
  const { count, increment, decrement, reset } = Custom_hooks1(0); // Using the custom hook

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
export default Use_of_Custom_hooks