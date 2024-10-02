import React from 'react'
import { useReducer } from 'react'

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}
const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <fieldset className='border-violet-700 border-4'>
    <div>
    <p>Count: {state.count}</p>
    <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
  </div>
  </fieldset>
  )
}

export default UseReducer1