import React from 'react'
import Button from './Button'
import { useState } from 'react';
const Card = (props) => {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [userData, setUserData] = useState({"name" : "Noname"})
    function increment() {
      setIsLoading(true)
      setCount(count+1)
      console.log(count)
      setUserData({"name" : "bhushan"})
      setIsLoading(false)
    }

  return (
    <fieldset>
      <legend>Props</legend>
    <div className='card'>
       <h1>{props.title}</h1>
       <p>{userData.name}</p>
       <p>{props.description ? props.description:"does not exist"}</p>
       <p>count: {isLoading ? "loading..." : count}</p>
       <button onClick={increment}>Increment</button>
    </div>
    </fieldset>
  )
}

export default Card