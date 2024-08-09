import React from 'react'
import { useState } from 'react'
const Increment = () => {
    const [num,setNum] = useState(0);
    function increase(){
        setNum(num+5);
    }
  return (
    <fieldset>
    <legend>useState</legend>
    <center>
    <div>
    <p>{num}</p>
    <button onClick={increase}>Increment</button>
    </div>
    </center>
    </fieldset>
  )
}
export default Increment