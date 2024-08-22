import React from 'react'
import { useForm } from 'react-hook-form'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const Handle_submit_Async = () => {
    const { register, handleSubmit, formState: { errors }, formState } = useForm();
    const onSubmit = async data => {
      await sleep(1000); //for waiting
      if (data.username === "ashish") {
        alert(JSON.stringify(data));
      } else {
        alert("There is an error");
      }
    };
  return (
    <fieldset className='border-violet-700 border-4'>
      <legend>Handle Submit (Async)</legend>
      <form onSubmit={handleSubmit(onSubmit)}>
      <br/>
      <label className='text-violet-600 font-bold' htmlFor="username">User Name: &nbsp;
      <input className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl' {...register("username")} /></label>
      <br/><br/>
      <input type="submit" className='bg-blue-800 text-white border-blue-300 border-2 rounded'/>
    </form>
    <br/>
      </fieldset>
  )
}

export default Handle_submit_Async