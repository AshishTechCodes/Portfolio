// useMemo is a hook in React that helps optimize performance by memoizing the result of a computation. It only recalculates the value when one of its dependencies changes. This can be particularly useful for expensive calculations or rendering operations that don’t need to be recalculated on every render.

// Basic Explanation
// Purpose: To memoize a value so that it doesn't get recalculated on every render unless its dependencies change.
// Usage: useMemo takes two arguments: a function that computes the value, and an array of dependencies. If the dependencies have not changed since the last render, useMemo returns the cached value.
import React from 'react'
import { useState,useMemo } from 'react';
import ReactDOM from "react-dom/client";
const UseMemo1 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
   return (
    <fieldset className='border-violet-700 border-4'>
    <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo} className='bg-blue-800 text-white border-blue-300 border-2 rounded'>Add Todo</button>
      </div>
      <hr />
      <div>
        Count: {count}
        <br/>
        <button onClick={increment} className='bg-blue-800 text-white border-blue-300 border-2 rounded'>Increment</button>
        <br/>
        {calculation}
      </div>
    </fieldset>
  )
}
const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

export default UseMemo1