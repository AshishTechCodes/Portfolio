import React from 'react'
import { useForm } from 'react-hook-form'
const FormState = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
      } = useForm();
      const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    <input {...register("test")} />
    {/* {test.length>8 ? <input type="submit" /> : errors.root} */}
  </form>
  )
}

export default FormState