import React from 'react'
import { useReducer } from 'react'
const useReducer1 = () => {
  const initialState = { count: 0 };
  
  return (
    <div>
    <p>Count: {state.count}</p>
    <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
   </div>
  )
}

export default useReducer1