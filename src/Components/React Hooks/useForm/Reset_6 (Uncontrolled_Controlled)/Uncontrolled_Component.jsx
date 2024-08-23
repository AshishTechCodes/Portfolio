import React from 'react'
import { useForm } from 'react-hook-form'
import { useCallback } from 'react'
import { useEffect } from 'react'
const Uncontrolled_Component = () => {
  const { register, handleSubmit, reset } = useForm()
  const resetAsyncForm = useCallback(async () => {
    const result = await fetch("./api/formValues.json")
    reset(result)
  }, [reset])

  useEffect(() => {
    resetAsyncForm()
  }, [resetAsyncForm])
  return (
    <fieldset className='border-violet-700 border-4'>
      <legend>Reset (Uncontrolled)</legend>
      <form onSubmit={handleSubmit((data) => {})}>
      <br/>
      <input
      className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl'
      {...register("firstName")} />
      <br/><br/>
      <input
      className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl'
      {...register("lastName")} />
      <br/><br/>
      <input
        type="button"
        onClick={() => {
          reset(
            {
              firstName: "bill",
            },
            {
              keepErrors: true,
              keepDirty: true,
            }
          )
        }}
      />
      <button
      className='bg-blue-800 text-white border-blue-300 border-2 rounded'
        onClick={() => {
          reset((formValues) => ({
            ...formValues,
            lastName: "Null",
          }))
        }}
      >
        Reset partial
      </button>
    </form>
    <br/>
    </fieldset>
  )
}

export default Uncontrolled_Component