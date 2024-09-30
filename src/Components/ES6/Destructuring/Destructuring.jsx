import React from 'react'

const Destructuring = () => {    
    function calculate(a,b){
    const add = a+b ;
    const substract = a-b;
    const multiple = a*b;
    const div = a/b;
    return [add,substract,multiple,div];
    }
    const [add,substract,multiple,div] = calculate(10,5);
  return (
    <div>
        <p>{add}</p>
        <p>{substract}</p>
        <p>{multiple}</p>
        <p>{div}</p>
    </div>
  )
}

export default Destructuring