import React from 'react'
import { useForm } from 'react-hook-form'
const Unregister = () => {
    const { register, handleSubmit, unregister, getValues } = useForm();

    const onSubmit = (data) => {
        console.log(data);
      alert(JSON.stringify(data));
    };
  return (
    <fieldset className='border-violet-700 border-4'>
      <legend>UnRegister</legend>
      <br/>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>First Name: </label>
      <input className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl' {...register("firstName")} />
      <br/>
      <br/>
      <label>Last Name: </label>
      <input className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl' {...register("lastName")} />
      <br/><br/>
      <button className='bg-blue-800 text-white border-blue-300 border-2 rounded'
        type="button"
        onClick={() => {
          unregister("lastName");
          console.log(getValues())
        }}
      >
        unregister lastName
      </button>
        <br/><br/>
      <input type="submit" className='bg-blue-800 text-white border-blue-300 border-2 rounded'/>
    </form>
    </fieldset>
  )
}

export default Unregister