import React from "react";
import { useForm } from "react-hook-form";
const Watch_4 = () => {
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const watchShowAge = watch("showAge", false);
  const watchAllFields = watch();
  const watchFields = watch(["showAge", "number"]);
  React.useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const onSubmit = (data) => console.log(data);
  return (
    <fieldset className="border-violet-700 border-4">
      <legend>Watch</legend>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="checkbox" {...register("showAge")} />

        {watchShowAge && (
          <input type="number" {...register("age", { min: {value:50 , message: "Age is more than 50 require"}})} />
        )}
        {errors.age && <p className="text-black text-lg">{errors.age.message}</p>}
        <input type="submit" />
      </form>
    </fieldset>
  );
};

export default Watch_4;
