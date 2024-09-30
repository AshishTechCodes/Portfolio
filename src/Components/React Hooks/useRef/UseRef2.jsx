import React, { useRef,useState } from 'react'

const UseRef2 = () => {
    const count = useRef(0);
    const [inc,setInc] =useState(0);
    const startTimer = () =>{
        setInterval(()=>{
            count.current+=1;
            setInc(count.current);
            // console.log(count.current);
        },1000);
    };
  return (
    <div>
    <button onClick={startTimer}>Start Timer</button>
    <p>{inc}</p>
    </div>
  )
}

export default UseRef2