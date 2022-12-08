import React from "react";
import { useField } from "formik";
import { Label } from './Index'
const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label id={props.id} name={props.name} label={label} />

      <input
        className="block w-full appearance-none rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-blue-500 sm:text-sm"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-lg text-red-600">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
