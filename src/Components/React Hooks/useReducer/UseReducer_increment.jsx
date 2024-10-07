import React, { useReducer } from 'react'

function reducer(state,action){
    if(action.type === 'increment age'){
        return{
            age:state.age +1
        };
    }
}

const UseReducer_increment = () => {
    const [state,dispatch] = useReducer(reducer,{age:42});
  return (
    <div>
        <button onClick={()=>{
            dispatch({type:'increment age'})
        }}>Increment</button>
        <p>Your Current Age is {state.age}</p>
    </div>
  )
}

export default UseReducer_increment