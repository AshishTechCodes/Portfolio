// Custom hooks in React are a way to encapsulate reusable logic in a function that can use other hooks. They allow you to extract component logic into reusable functions, making your code cleaner and easier to maintain.

// Why Use Custom Hooks?
// Reusability: You can share logic between components without repeating code.
// Separation of Concerns: Custom hooks help keep your components focused on rendering, while the hook manages logic.
// Abstraction: You can abstract complex logic away from your components, making them simpler.


import { useState } from 'react';

const Custom_hooks1 = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);
  return { count, increment, decrement, reset };
};
export default Custom_hooks1