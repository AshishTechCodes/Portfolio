import React from 'react'
import ReactDOM from 'react-dom/client';

const Array1 = () => {
const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

  return (
    <fieldset className='border-violet-700 border-4'>
    <div>{myList}</div>
    </fieldset>
  )
}

export default Array1