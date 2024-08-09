import React from 'react'
import { useState } from 'react'
const From = () => {
    const[name,setName] = useState("");
    const[email,setEmail]=useState("");
    const[age,setAge]=useState("");
    const[ageerror,setAgeerror]=useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
        name:name,
        email:email,
        age:age
        }
        if(formData.age<18){
            setAgeerror("You are not eligible")
        }else{
            setAgeerror("");
            console.log(formData)
        }
    }
  return (
    <div>
    <center>
    <fieldset>
        <legend>Form</legend>
    <form>
    <input type='text' placeholder='Enter Your Name!' onChange={(e)=>{
        setName(e.target.value)
    }}/>
    <br/>
    <input type='email' placeholder='Enter Your mail!' onChange={(e)=>{
        setEmail(e.target.value)
    }}/>
    <br/>
    <input type='number' placeholder='Enter Your age' onChange={(e)=>{
        setAge(e.target.value)
    }}/>
    <br/>
    {ageerror}
    <br/>
    <button onClick={handleSubmit}>Submit</button>
    </form>
    <div>
    <p>{name}</p>
    <p>{email}</p>
    <p>{age}</p>
    </div>
    </fieldset>
    </center>
    </div>
  )
}

export default From