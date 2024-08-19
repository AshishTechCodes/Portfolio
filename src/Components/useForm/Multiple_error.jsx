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

    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>ErrorMessage</h1>
      <input className='bg-violet-600 text-white'
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

      <input type="submit" className='bg-blue-700 text-white ml-2'/>
    </form>
  );
}

export default Multiple_error