import React from 'react'
import ReactDOM from 'react-dom/client';

const Array1 = () => {
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

  return (
    <div>{myList}</div>
  )
}

export default Array1