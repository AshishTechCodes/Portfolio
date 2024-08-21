import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormState_3 = () => {
  const [data,useData]=useState('');
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isSubmitting, touchedFields, submitCount },
  } = useForm();
  
  const onSubmit = (data) => console.log(data);

  // Watch the value of the input field
  const testValue = watch('test', '');

  return (
    <fieldset className='border-violet-700 border-4'>
      <legend>formState</legend>
    <form onSubmit={handleSubmit(onSubmit)}>
      <br/>
      <input className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl' {...register('test', { required: 'This field is required' })} /><br/><br/>
      {testValue.length > 8 ? (
        <input type="submit" className='bg-blue-800 text-white border-blue-300 border-2 rounded'/>
      ) : (
        <span>{errors.test?.message}</span>
      )}
    </form>
    <p>{data}</p>
    </fieldset>
  );
}

export default FormState_3;