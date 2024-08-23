import React from 'react'
import { useForm } from 'react-hook-form'
import { Controller } from 'react-hook-form'
const Controlled_Component = () => {
  const { register, handleSubmit, reset, setValue, control } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <fieldset className='border-violet-700 border-4'>
      <legend>Reset (Controlled)</legend>
      <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ field }) => <p {...field} />}
        name="firstName"
        control={control}
        rules={{ required: true }}
        defaultValue=""
      />
      <Controller
        render={({ field }) => <p {...field} />}
        name="lastName"
        control={control}
        defaultValue=""
      />

      {/* <input type="submit" /> */}
      <input type="button" onClick={reset} />
      <input
      className='bg-blue-800 text-white border-blue-300 border-2 rounded'
        type="button"
        onClick={() => {
          reset({
            firstName: "bill",
            lastName: "luo",
          })
        }}
      />
    </form>
    </fieldset>
  )
}

export default Controlled_Component