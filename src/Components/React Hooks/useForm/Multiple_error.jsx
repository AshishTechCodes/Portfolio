import React from 'react'
import { useForm } from "react-hook-form";
import _ from "lodash/fp";
import { ErrorMessage } from '@hookform/error-message';

const Multiple_error = () => {
    const { register, formState: { errors }, handleSubmit } = useForm({
        criteriaMode:"all"
      });
      const onSubmit = (data) => console.log(data);
  return (
    <fieldset className='border-violet-700 border-4'>
    <legend>Multiple Error</legend>
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>ErrorMessage</h1>
      <input className='h-fit w-auto border-black bg-violet-600 text-white font-bold text-xl'
        {...register("multipleErrorInput", {
          required: "This input is required.",
          pattern: {
            value: /d+/,
            message: "This input is number only."
          },
          minLength: {
            value: 11,
            message: "This input must exceed 10 characters"
          }
        })}
      />
      <ErrorMessage
        errors={errors}
        name="multipleErrorInput"
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? _.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
            : null;
        }}
      />
      <br/><br/>
      <input type="submit" className='bg-blue-800 text-white border-blue-300 border-2 rounded'/>
      <br/>
    </form>
    </fieldset>
  )
}

export default Multiple_error