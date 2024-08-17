import React from 'react'
import { useForm } from 'react-hook-form'
const Register = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      category: '',
      checkbox: [],
      radio: ''
    }
  });
  return (
    <fieldset className='border-violet-700 border-4'>
      <legend>Register</legend>
      {/* printing the elements in console */}
      <form onSubmit={handleSubmit(console.log)}>
      <input className='h-10 w-auto' {...register("firstName", { required: true })} placeholder="Enter First name" />
      <br/><br/>
      <input className='h-10 w-auto' {...register("lastName", { minLength: 2 })} placeholder="Enter Last name" />
      <br/><br/>
      <p>Select Location: <select className='h-10 w-auto' {...register("category")}>
        <option value="">Select...</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
      </select></p>
      <br/><br/>
      <p>Select Subjects:</p>
      <p>C/C++: <input className='h-auto w-auto' {...register("checkbox")} type="checkbox" value="C/C++" /></p>
      <p>Java: <input className='h-auto w-auto' {...register("checkbox")} type="checkbox" value="Java" /></p>
      <p>.NET: <input className='h-auto w-auto' {...register("checkbox")} type="checkbox" value=".NET" /></p>
      <br/><br/>
      <p>Select Your Gender: </p>
      <p>Male: <input className='h-auto w-auto' {...register("radio")} type="radio" value="Male" />
      <br/>
      Female: <input className='h-auto w-auto' {...register("radio")} type="radio" value="Female" /></p>
      <br/><br/>
      <input type="submit" />
    </form>
    </fieldset>
  )
}

export default Register