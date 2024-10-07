import React from 'react'
import { useState,useCallback } from 'react'
const CounterDisplay = React.memo(({ count }) => {
    console.log("CounterDisplay re-rendered");
    return <h2>Count: {count}</h2>;
  });
  
  const Button = React.memo(({ onClick, children }) => {
    console.log(`${children} button rendered`);
    return <button onClick={onClick}>{children}</button>;
  });
const UseCallback = () => {
    const [count, setCount] = useState(0);
  
  // Increment count
  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  
  // Decrement count
  const decrement = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);
  return (
    <div>
      <CounterDisplay count={count} />
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
    </div>
  )
}

export default UseCallback