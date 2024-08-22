import React from "react";
import { useForm } from "react-hook-form";
const Handle_submit_Sync = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, e) => console.log(data,e);
  const onError = (errors, e) => console.log(errors, e);
  return (
    <fieldset className='border-violet-700 border-4'>
      <legend>Handle Submit (Sync)</legend>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
      <br/>
        <input className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl' {...register("firstName")}/>
        <br/><br/>
        <input className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl' {...register("lastName")}/>
        <br/><br/>
        <button className='bg-blue-800 text-white border-blue-300 border-2 rounded' type="submit">Submit</button>
      </form>
      <br/>
    </fieldset>
  );
};

export default Handle_submit_Sync;