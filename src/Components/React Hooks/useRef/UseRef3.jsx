import React from 'react'
import { useState,useRef } from 'react'
const UseRef3 = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef();

    const state = () =>{
        setCount(count+1);
         prevCountRef.current = count;
    };

  return (
    <div>
        <h1>Current Count : {count} </h1>
        <h1>Previous Count : {prevCountRef.current}</h1>
        <button className='bg-blue-700 text-white font-bold px-5' onClick={state}>Increment</button>
    </div>
  )
}

export default UseRef3