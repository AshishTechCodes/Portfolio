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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Last Name</label>
      <input className='h-10 ' {...register("firstName")} />
      <label>First Name</label>
      <input {...register("lastName")} />
      <button
        type="button"
        onClick={() => {
          unregister("lastName");
          console.log(getValues())
        }}
      >
        unregister lastName
      </button>
      <input type="submit" />
    </form>
    </fieldset>
  )
}

export default Unregister