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
      <input  className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl' {...register("firstName", { required: true })} placeholder="Enter First name" />
      <br/><br/>
      <input className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl' {...register("lastName", { minLength: 2 })} placeholder="Enter Last name" />
      <br/><br/>
      <p className='text-violet-600 font-bold'>Select Location: <select className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl' {...register("category")}>
        <option value="">Select...</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
      </select></p>
      <br/><br/>
      <p className='text-violet-600 font-bold'>Select Subjects:</p>
      <p className='text-violet-600 font-bold'>C/C++: <input className='h-auto w-auto' {...register("checkbox")} type="checkbox" value="C/C++" /></p>
      <p className='text-violet-600 font-bold'>Java: <input className='h-auto w-auto' {...register("checkbox")} type="checkbox" value="Java" /></p>
      <p className='text-violet-600 font-bold'>.NET: <input className='h-auto w-auto' {...register("checkbox")} type="checkbox" value=".NET" /></p>
      <br/><br/>
      <p className='text-violet-600 font-bold'>Select Your Gender: </p>
      <p className='text-violet-600 font-bold'>Male: <input className='h-auto w-auto' {...register("radio")} type="radio" value="Male" />
      <br/>
      Female: <input className='h-auto w-auto' {...register("radio")} type="radio" value="Female" /></p>
      <br/><br/>
      <input className='bg-blue-800 text-white border-blue-300 border-2 rounded' type="submit" />
    </form>
    </fieldset>
  )
}

export default Register