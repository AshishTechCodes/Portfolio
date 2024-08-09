import React, { useState, useEffect } from 'react';
import ImageCard from './ImageCard';

const Effect = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [decrement,setDecrement] = useState(0);
  
  function Increment(){
    setCount(count+5)
  }
  function Decrement(){
    setDecrement(decrement+1)
  }
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  },[count]);

  useEffect(()=>{
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  },[decrement]);

  return (
    <>
    {isLoading ? (
      <div className='card'>useEffect is Loading...</div>
    ) : (
      <center>
        <fieldset>
          <legend>useEffect</legend>
          <div className="container">
            <ImageCard/><ImageCard/><ImageCard/><ImageCard/><ImageCard/>
          </div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <p>Count: {count}</p>
        </fieldset>
      </center>
    )}
    </>
  );
};

export default Effect;