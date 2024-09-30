import React from 'react'
import { useRef } from 'react';
const UseRef = () => {
const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  )
}

export default UseRef